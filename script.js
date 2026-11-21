'use strict';

// Lightweight, dependency-free interactions for the landscaping website.
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.site-header');
const backToTop = document.querySelector('.back-top');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
  navLinks?.classList.remove('is-open');
}

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  navLinks.classList.toggle('is-open', !open);
});

navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) closeMenu();
});
function updatePageChrome() {
  const scrolled = window.scrollY > 15;
  header?.classList.toggle('is-scrolled', scrolled);
  backToTop?.classList.toggle('is-visible', window.scrollY > 680);
}
window.addEventListener('scroll', updatePageChrome, { passive: true });
updatePageChrome();

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const serviceCards = [...document.querySelectorAll('.service-card[data-category]')];
const filterStatus = document.querySelector('#filter-status');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const value = button.dataset.filter;
  filterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let visible = 0;
  serviceCards.forEach(card => {
    const show = value === 'all' || card.dataset.category === value;
    card.hidden = !show;
    if (show) visible++;
  });
  if (filterStatus) filterStatus.textContent = `${visible} services shown`;
}));

const enquiryForm = document.querySelector('#enquiry-form');
const serviceField = document.querySelector('#service-select');
const status = document.querySelector('#form-status');
const copyButton = document.querySelector('#copy-enquiry');
const emailAddress = 'info@kodiconstruction.com.au';

// Preselect a relevant service when a customer clicks a service card.
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  if (!serviceField) return;
  const choice = link.dataset.service;
  const option = [...serviceField.options].find(o => o.text.trim() === choice);
  if (option) serviceField.value = option.value;
  if (status) status.textContent = '';
}));

function enquiryData() {
  const form = new FormData(enquiryForm);
  const value = key => String(form.get(key) || '').trim();
  return {
    name: value('name'), email: value('email'), phone: value('phone'),
    suburb: value('suburb'), service: value('service'), budget: value('budget'),
    details: value('details')
  };
}

function formatEnquiry() {
  const d = enquiryData();
  return [
    'Hello KODI Landscaping,', '',
    'I would like to enquire about a landscaping / garden care project.', '',
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone || 'Not provided'}`,
    `Suburb / postcode: ${d.suburb}`,
    `Service: ${d.service}`,
    `Approximate budget: ${d.budget || 'Not sure yet'}`, '',
    'Project details:', d.details, '',
    'Please get in touch to discuss the next steps.', '',
    'Sent from the KODI Landscaping website enquiry form.'
  ].join('\n');
}

function validateEnquiry() {
  if (!enquiryForm.reportValidity()) {
    if (status) {
      status.classList.add('is-error');
      status.textContent = 'Please complete the required fields first.';
    }
    return false;
  }
  return true;
}

enquiryForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (!validateEnquiry()) return;
  const d = enquiryData();
  const subject = `Landscaping enquiry — ${d.suburb} — ${d.service}`;
  const url = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formatEnquiry())}`;
  if (status) {
    status.classList.remove('is-error');
    status.textContent = 'Your email app should open with the details ready. Please press Send there to complete your enquiry.';
  }
  window.location.href = url;
});

copyButton?.addEventListener('click', async () => {
  if (!validateEnquiry()) return;
  const text = formatEnquiry();
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      // This fallback is for browsers that don't support Clipboard API.
      const area = document.createElement('textarea');
      area.value = text;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      const copied = document.execCommand('copy');
      area.remove();
      if (!copied) throw new Error('Copy not supported');
    }
    if (status) {
      status.classList.remove('is-error');
      status.textContent = `Copied! Paste the details into an email to ${emailAddress}.`;
    }
  } catch {
    if (status) {
      status.classList.add('is-error');
      status.textContent = `Your browser blocked copying. Please email ${emailAddress} directly.`;
    }
  }
});

document.querySelector('#year').textContent = String(new Date().getFullYear());

// Keep layout stable when third-party photos are temporarily unavailable.
document.querySelectorAll('img[src^="https://images.unsplash.com/"]').forEach(image => {
  const useFallback = () => { image.classList.add('is-broken'); image.setAttribute('aria-hidden','true'); };
  image.addEventListener('error', useFallback, { once: true });
  if (image.complete && image.naturalWidth === 0) useFallback();
});
