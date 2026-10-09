/* =====================================================================
   COMPORTAMIENTO DE LA WEB
   (Los datos de contacto se editan en js/config.js)
   ===================================================================== */
(function () {
  "use strict";

  var CFG = window.SITE_CONFIG || {};
  var t = function (k) { return window.I18N ? window.I18N.t(k) : k; };

  var SOCIAL_LABELS = { instagram: "Instagram", facebook: "Facebook", youtube: "YouTube", tiktok: "TikTok" };

  /* ---------- Menú móvil ---------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("main-nav");
    var header = document.querySelector(".site-header");

    function close() {
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("nav-open", open);
    });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Fotos: se cargan solo si el archivo existe ---------- */
  function initPhotos() {
    document.querySelectorAll("[data-img]").forEach(function (el) {
      var src = el.getAttribute("data-img");
      var img = new Image();
      img.onload = function () {
        el.style.backgroundImage = "url('" + src + "')";
        el.classList.add("has-img");
      };
      img.src = src;
    });
  }

  /* ---------- Datos de contacto ---------- */
  function serviceLabel(value) {
    var opt = document.querySelector('#f-service option[value="' + value + '"]');
    return opt && value ? opt.textContent.toLowerCase() : "";
  }

  function whatsappUrl() {
    if (!CFG.whatsapp) return "";
    var svc = serviceLabel(document.getElementById("f-service").value);
    var text = t("msg.whatsapp") + (svc ? svc + "." : t("msg.whatsappDefault"));
    return "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(text);
  }

  function updateWhatsapp() {
    var url = whatsappUrl();
    ["whatsapp-link", "whatsapp-float"].forEach(function (id) {
      var el = document.getElementById(id);
      if (url) { el.href = url; el.hidden = false; } else { el.hidden = true; }
    });
  }

  function initContact() {
    var email = document.getElementById("email-link");
    if (CFG.email) { email.href = "mailto:" + CFG.email; email.textContent = CFG.email; }
    else email.parentElement.hidden = true;

    var phone = document.getElementById("phone-link");
    if (CFG.phoneDisplay) {
      phone.href = "tel:" + CFG.phoneDisplay.replace(/[^\d+]/g, "");
      phone.textContent = CFG.phoneDisplay;
    } else phone.parentElement.hidden = true;

    var base = document.getElementById("base-city");
    if (CFG.baseCity) base.textContent = CFG.baseCity;
    else base.parentElement.hidden = true;

    var list = document.getElementById("socials");
    var socials = CFG.socials || {};
    Object.keys(socials).forEach(function (k) {
      if (!socials[k]) return;
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = socials[k];
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = SOCIAL_LABELS[k] || k;
      li.appendChild(a);
      list.appendChild(li);
    });
    if (!list.children.length) list.hidden = true;

    updateWhatsapp();
    document.addEventListener("languagechange", updateWhatsapp);
    document.getElementById("f-service").addEventListener("change", updateWhatsapp);
  }

  /* ---------- Botones que preseleccionan el servicio ---------- */
  function initServiceLinks() {
    var select = document.getElementById("f-service");
    document.querySelectorAll("[data-service]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        select.value = btn.getAttribute("data-service");
        updateWhatsapp();
        // Llevar el foco al primer campo tras el desplazamiento
        setTimeout(function () { document.getElementById("f-name").focus({ preventScroll: true }); }, 600);
      });
    });
  }

  /* ---------- Formulario de reserva ---------- */
  function initForm() {
    var form = document.getElementById("booking-form");
    var status = document.getElementById("form-status");
    var submit = form.querySelector('button[type="submit"]');

    function setStatus(msg, type) {
      status.textContent = msg;
      status.className = "form-status" + (type ? " is-" + type : "");
    }

    function summary(data) {
      var lines = [];
      form.querySelectorAll("input, select, textarea").forEach(function (el) {
        if (!el.name || el.name === "_gotcha" || el.type === "checkbox") return;
        var label = form.querySelector('label[for="' + el.id + '"]');
        var value = el.tagName === "SELECT" ? el.options[el.selectedIndex].text : data.get(el.name);
        if (value) lines.push((label ? label.textContent.replace(" *", "") : el.name) + ": " + value);
      });
      return lines.join("\n");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.classList.add("was-validated");
      if (!form.checkValidity()) {
        setStatus(t("msg.invalid"), "error");
        var firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var data = new FormData(form);
      if (data.get("_gotcha")) return; // spam

      // Sin Formspree configurado: abrir el correo del visitante
      if (!CFG.formEndpoint) {
        setStatus(t("msg.mailto"), "ok");
        window.location.href = "mailto:" + CFG.email +
          "?subject=" + encodeURIComponent(t("msg.mailSubject") + " — " + serviceLabel(data.get("servicio"))) +
          "&body=" + encodeURIComponent(summary(data));
        return;
      }

      data.append("_subject", t("msg.mailSubject") + " — " + serviceLabel(data.get("servicio")));
      data.append("idioma", window.I18N ? window.I18N.lang() : "es");
      submit.disabled = true;
      setStatus(t("msg.sending"));

      fetch(CFG.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (res) {
          if (!res.ok) throw new Error(res.status);
          form.reset();
          form.classList.remove("was-validated");
          updateWhatsapp();
          setStatus(t("msg.success"), "ok");
        })
        .catch(function () { setStatus(t("msg.error"), "error"); })
        .then(function () { submit.disabled = false; });
    });
  }

  /* ---------- Vídeo (carga bajo demanda) ---------- */
  function initVideo() {
    var box = document.getElementById("video");
    var btn = box.querySelector(".video-play");
    // Sin vídeo configurado, no se muestra el recuadro
    if (!CFG.youtubeId) { box.hidden = true; return; }
    box.style.backgroundImage = "url('https://i.ytimg.com/vi/" + CFG.youtubeId + "/hqdefault.jpg')";
    btn.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + CFG.youtubeId + "?autoplay=1&rel=0";
      iframe.title = "Fátima Sánchez & Pablo Cabrejos — Tango";
      iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      iframe.allowFullscreen = true;
      box.innerHTML = "";
      box.appendChild(iframe);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
    initNav();
    initPhotos();
    initContact();
    initServiceLinks();
    initForm();
    initVideo();
  });
})();
