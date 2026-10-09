/* =====================================================================
   TRADUCCIONES
   - Los textos en ESPAÑOL están escritos directamente en index.html.
   - Aquí están los textos en INGLÉS (mismas claves que los atributos
     data-i18n del HTML) y los mensajes que genera JavaScript (ambos idiomas).
   ===================================================================== */
(function () {
  "use strict";

  var EN = {
    "skip": "Skip to content",
    "nav.about": "About us",
    "nav.classes": "Classes",
    "nav.shows": "Shows",
    "nav.milongas": "Milongas",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.menu": "Menu",

    "hero.lead": "Argentine tango dance couple and teachers. Classes, shows and milongas across Europe and the rest of the world.",
    "hero.ctaShow": "Book a show",
    "hero.ctaClass": "Book a class",

    "about.title": "One couple, one embrace",
    "about.lead": "We have both spent years devoted to Argentine tango. Now we dance together as a couple, on stage, at milongas and in the classroom, in Europe and beyond.",
    "about.fatimaRole": "Dancer and teacher",
    "about.fatimaBio": "[PENDING] Fátima's background: training, years of dancing, teachers, festivals, companies and stages she has performed on.",
    "about.pabloRole": "Dancer and teacher",
    "about.pabloBio": "[PENDING] Pablo's background: training, years of dancing, teachers, festivals, companies and stages he has performed on.",

    "classes.title": "Tango classes",
    "classes.lead": "Technique, musicality, connection and embrace. We tailor every class to each student's level and goals, from the very first step to advanced refinement.",
    "classes.groupTitle": "Group classes",
    "classes.groupText": "Regular courses and intensive workshops for schools, associations and festivals. A space to learn, practise and share.",
    "classes.group1": "Levels: beginner, intermediate and advanced",
    "classes.group2": "Weekly courses, workshops and seminars",
    "classes.group3": "Themed: vals, milonga, turns, musicality…",
    "classes.group4": "We travel to your school or festival",
    "classes.groupCta": "Ask about group classes",
    "classes.privateTitle": "Private lessons",
    "classes.privateText": "One-to-one attention for individuals or couples. Ideal to progress quickly, prepare a choreography or your wedding dance.",
    "classes.private1": "Individual or couple lessons",
    "classes.private2": "With one or both teachers",
    "classes.private3": "Choreographies for weddings and events",
    "classes.private4": "In person, single lessons or packages",
    "classes.privateCta": "Book a private lesson",

    "shows.title": "Tango shows",
    "shows.lead": "We bring tango to your event with a tailor-made performance, to recorded music or with live musicians.",
    "shows.liveTitle": "With live musicians",
    "shows.liveText": "From a bandoneon and guitar duo to a cuarteto típico with bandoneon, violin, piano and double bass. We work with trusted musicians or with those you suggest.",
    "shows.recTitle": "With recorded music",
    "shows.recText": "The most flexible format. We choose tangos, valses and milongas by the great orchestras to suit the length and atmosphere of your event.",
    "shows.formatsTitle": "Formats",
    "shows.f1t": "Milonga exhibition",
    "shows.f1d": "Three or four songs, about 12 minutes. The classic format at milongas and tango festivals.",
    "shows.f2t": "Show for events",
    "shows.f2d": "Between 20 and 45 minutes, in one or several sets, with tango, vals and milonga.",
    "shows.f3t": "Show and class for guests",
    "shows.f3d": "After the show, a beginner class so your guests can try their first embrace.",
    "shows.eventsTitle": "Where we dance",
    "shows.ev1": "Corporate events",
    "shows.ev2": "Weddings and celebrations",
    "shows.ev3": "Festivals and theatres",
    "shows.ev4": "Galas and dinner shows",
    "shows.ev5": "Hotels and cruises",
    "shows.ev6": "Tango encuentros and marathons",
    "shows.cta": "Request a quote for a show",
    "shows.bizTitle": "For companies and organisers, in Europe and beyond",
    "shows.biz1": "Tailored quote within 24–48 hours",
    "shows.biz2": "Technical rider and stage requirements",
    "shows.biz3": "We travel to any country",
    "shows.biz4": "Invoice and contract",
    "shows.biz5": "Service in Spanish and English",

    "milongas.title": "We organise milongas",
    "milongas.lead": "The milonga is the social heart of tango. We create and host milongas for festivals, associations, cultural venues and private events: music in tandas, the exhibition, the atmosphere and a warm-up class for newcomers.",
    "milongas.t1": "Regular milongas",
    "milongas.t2": "Themed milongas",
    "milongas.t3": "Festivals and encuentros",
    "milongas.t4": "Private events",
    "milongas.cta": "Organise a milonga with us",

    "gallery.title": "Gallery",
    "gallery.video": "Watch video",
    "gallery.play": "Play video",

    "contact.title": "Tell us what you need",
    "contact.lead": "A class, a show or a milonga. Send us the date and place and we will reply with availability and a quote.",
    "contact.whatsapp": "Message us on WhatsApp",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.baseLabel": "Based in",
    "contact.travel": "available to travel",

    "form.name": "Full name *",
    "form.email": "Email *",
    "form.phone": "Phone / WhatsApp",
    "form.client": "I am",
    "form.clientPerson": "An individual",
    "form.clientCompany": "A company / organiser",
    "form.clientSchool": "A tango school / festival",
    "form.service": "Service *",
    "form.choose": "Choose an option",
    "form.svcGroup": "Group class / workshop",
    "form.svcPrivate": "Private lesson",
    "form.svcShowLive": "Show with live musicians",
    "form.svcShowRec": "Show with recorded music",
    "form.svcMilonga": "Milonga organisation",
    "form.svcOther": "Other",
    "form.date": "Approximate date",
    "form.people": "No. of people / guests",
    "form.place": "Event city & country *",
    "form.message": "Tell us more",
    "form.messagePh": "Type of event, duration, dance level, stage available…",
    "form.privacy": "I agree that my data will only be used to reply to this request. *",
    "form.submit": "Send request",

    "footer.tag": "Argentine tango: classes, shows and milongas",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Data sent through the form is used only to reply to your request and is never shared with third parties."
  };

  // Mensajes generados por JavaScript (en ambos idiomas)
  var MESSAGES = {
    es: {
      "msg.sending": "Enviando…",
      "msg.success": "¡Gracias! Hemos recibido tu solicitud y te responderemos muy pronto.",
      "msg.error": "No se pudo enviar. Inténtalo de nuevo o escríbenos por WhatsApp o email.",
      "msg.invalid": "Por favor, completa los campos obligatorios marcados con *.",
      "msg.mailto": "Se abrirá tu programa de correo con la solicitud lista para enviar.",
      "msg.whatsapp": "¡Hola Fátima y Pablo! Os escribo desde vuestra web. Me gustaría información sobre ",
      "msg.whatsappDefault": "vuestras clases y shows de tango.",
      "msg.mailSubject": "Solicitud desde la web"
    },
    en: {
      "msg.sending": "Sending…",
      "msg.success": "Thank you! We have received your request and will get back to you very soon.",
      "msg.error": "Something went wrong. Please try again or contact us via WhatsApp or email.",
      "msg.invalid": "Please fill in the required fields marked with *.",
      "msg.mailto": "Your email app will open with the request ready to send.",
      "msg.whatsapp": "Hello Fátima and Pablo! I'm writing from your website. I'd like information about ",
      "msg.whatsappDefault": "your tango classes and shows.",
      "msg.mailSubject": "Request from the website"
    }
  };

  var SUPPORTED = ["es", "en"];
  var STORAGE_KEY = "tango-lang";
  var original = {}; // textos en español tomados del HTML
  var current = "es";

  function captureOriginal() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      original["t:" + el.getAttribute("data-i18n")] = el.textContent;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      original["p:" + el.getAttribute("data-i18n-placeholder")] = el.getAttribute("placeholder");
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      original["a:" + el.getAttribute("data-i18n-aria")] = el.getAttribute("aria-label");
    });
  }

  function lookup(prefix, key, lang) {
    if (lang === "en" && Object.prototype.hasOwnProperty.call(EN, key)) return EN[key];
    return original[prefix + key];
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "es";
    current = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = lookup("t:", el.getAttribute("data-i18n"), lang);
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = lookup("p:", el.getAttribute("data-i18n-placeholder"), lang);
      if (v != null) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = lookup("a:", el.getAttribute("data-i18n-aria"), lang);
      if (v != null) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* sin almacenamiento */ }
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: lang } }));
  }

  function initialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* sin almacenamiento */ }
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return nav === "es" ? "es" : "en";
  }

  window.I18N = {
    t: function (key) { return MESSAGES[current][key] || key; },
    lang: function () { return current; },
    set: apply
  };

  document.addEventListener("DOMContentLoaded", function () {
    captureOriginal();
    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
    });
    apply(initialLang());
  });
})();
