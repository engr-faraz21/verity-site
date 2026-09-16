// Mobile nav toggle
document.addEventListener('click', function (e) {
  var t = e.target.closest('.nav-toggle');
  if (!t) return;
  var nav = document.querySelector('nav.main');
  var open = nav.classList.toggle('open');
  t.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Opt-in form: single, clear confirmation (no second opt-in page)
document.addEventListener('submit', function (e) {
  var form = e.target.closest('#optin-form');
  if (!form) return;
  e.preventDefault();
  // NOTE: To capture leads, set this form's action to your CRM endpoint
  // (e.g. your GoHighLevel / LeadConnector form handler) and remove e.preventDefault().
  form.style.display = 'none';
  var ty = document.getElementById('thankyou');
  if (ty) { ty.style.display = 'block'; ty.scrollIntoView({behavior: 'smooth', block: 'center'}); }
});
