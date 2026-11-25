import './styles/main.css';
import { siteConfig, buildWhatsAppUrl } from './config/siteConfig.js';
import { icons } from './components/icons.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function setText(selector, value) {
  const el = $(selector);
  if (el && value !== undefined) {
    el.textContent = value;
  }
}

function hydrateBrandAndSeo() {
  const { brand, contact, seo } = siteConfig;

  document.title = seo.title;
  const metaDesc = $('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', seo.description);

  const ogTitle = $('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', seo.title);

  const ogDesc = $('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', seo.description);

  const ogImage = $('meta[property="og:image"]');
  if (ogImage && seo.ogImage) ogImage.setAttribute('content', seo.ogImage);

  $$('[data-brand="studioName"]').forEach((el) => {
    el.textContent = brand.studioName;
  });
  $$('[data-brand="studioSubtitle"]').forEach((el) => {
    el.textContent = brand.studioSubtitle;
  });

  const defaultWaUrl = buildWhatsAppUrl(contact.defaultWhatsappMessage);
  $$('[data-whatsapp="default"]').forEach((link) => {
    link.setAttribute('href', defaultWaUrl);
  });

  const locationShort = `${brand.neighborhood} · ${brand.city}`;
  $$('[data-contact="locationShort"]').forEach((el) => {
    el.textContent = locationShort;
  });

  // Dados estruturados Schema.org somente quando configurados com dados reais
  if (seo.enableStructuredData) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BeautySalon',
      name: brand.studioName,
      description: seo.description,
      telephone: `+${String(contact.whatsappNumber).replace(/\D/g, '')}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: contact.address,
        addressLocality: brand.city,
        addressCountry: 'BR',
      },
      sameAs: contact.instagramUrl ? [contact.instagramUrl] : [],
      ...(seo.siteUrl ? { url: seo.siteUrl } : {}),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}

function hydrateHero() {
  const { hero } = siteConfig;
  setText('#hero-eyebrow', hero.eyebrow);
  setText('#hero-title', hero.title);
  setText('#hero-subtitle', hero.subtitle);

  const primaryCtaSpan = $('#hero-primary-cta span:last-child');
  if (primaryCtaSpan) primaryCtaSpan.textContent = hero.primaryCta;
  setText('#hero-secondary-cta', hero.secondaryCta);

  const heroWaIcon = $('#hero-wa-icon');
  if (heroWaIcon) heroWaIcon.innerHTML = icons.whatsapp;

  const heroImg = $('#hero-image');
  if (heroImg) {
    heroImg.src = hero.image;
    heroImg.alt = hero.imageAlt;
  }

  const highlightsEl = $('#hero-highlights');
  if (highlightsEl) {
    highlightsEl.innerHTML = hero.highlights
      .map((item) => `<li>${item}</li>`)
      .join('');
  }
}

function hydrateServices() {
  const { servicesSection, services } = siteConfig;
  setText('#services-eyebrow', servicesSection.eyebrow);
  setText('#services-title', servicesSection.title);
  setText('#services-subtitle', servicesSection.subtitle);

  const grid = $('#services-grid');
  if (!grid) return;

  grid.innerHTML = services
    .map((service) => {
      const waHref = buildWhatsAppUrl(service.whatsappMessage);
      return `
        <article class="service-card reveal">
          <div class="service-media">
            <img
              src="${service.image}"
              alt="${service.imageAlt}"
              loading="lazy"
              decoding="async"
              width="600"
              height="450"
            />
            <span class="service-badge">${service.category}</span>
          </div>
          <div class="service-body">
            <h3 class="service-title">${service.name}</h3>
            <p class="service-desc">${service.description}</p>
            <a
              href="${waHref}"
              class="service-cta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar ${service.name} pelo WhatsApp"
            >
              <span>${servicesSection.ctaLabel}</span>
              ${icons.arrowRight}
            </a>
          </div>
        </article>
      `;
    })
    .join('');
}

function hydrateExperience() {
  const { experience } = siteConfig;
  setText('#experience-eyebrow', experience.eyebrow);
  setText('#experience-title', experience.title);
  setText('#experience-text', experience.text);

  const cta = $('#experience-cta');
  if (cta) {
    cta.textContent = experience.ctaText;
    cta.setAttribute('href', buildWhatsAppUrl(experience.whatsappMessage));
  }

  const img = $('#experience-image');
  if (img) {
    img.src = experience.image;
    img.alt = experience.imageAlt;
  }
}

function initPortfolio() {
  const { portfolio } = siteConfig;
  setText('#portfolio-eyebrow', portfolio.eyebrow);
  setText('#portfolio-title', portfolio.title);
  setText('#portfolio-subtitle', portfolio.subtitle);

  const filtersEl = $('#portfolio-filters');
  const gridEl = $('#portfolio-grid');
  if (!filtersEl || !gridEl) return;

  let activeCategory = 'Todos';
  let filteredItems = [...portfolio.items];
  let currentLightboxIndex = 0;

  // Lightbox elements
  const lightbox = $('#lightbox');
  const lightboxBackdrop = $('#lightbox-backdrop');
  const lightboxClose = $('#lightbox-close');
  const lightboxPrev = $('#lightbox-prev');
  const lightboxNext = $('#lightbox-next');
  const lightboxImg = $('#lightbox-image');
  const lightboxCat = $('#lightbox-category');
  const lightboxTitle = $('#lightbox-title');
  const lightboxDesc = $('#lightbox-desc');
  const lightboxCounter = $('#lightbox-counter');

  function updateLightboxView() {
    const item = filteredItems[currentLightboxIndex];
    if (!item) return;
    lightboxImg.src = item.image;
    lightboxImg.alt = item.imageAlt;
    lightboxCat.textContent = item.category;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.caption;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${filteredItems.length}`;
  }

  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxView();
    lightbox.hidden = false;
    document.body.classList.add('no-scroll');
    lightboxClose.focus();
  }

  function closeLightbox() {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove('no-scroll');
  }

  function showPrev() {
    currentLightboxIndex =
      (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    updateLightboxView();
  }

  function showNext() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
    updateLightboxView();
  }

  function renderGrid() {
    filteredItems =
      activeCategory === 'Todos'
        ? [...portfolio.items]
        : portfolio.items.filter((item) => item.category === activeCategory);

    gridEl.innerHTML = filteredItems
      .map(
        (item, index) => `
        <button
          type="button"
          class="portfolio-item"
          data-index="${index}"
          aria-label="Ampliar imagem: ${item.title}"
        >
          <img
            src="${item.image}"
            alt="${item.imageAlt}"
            loading="lazy"
            decoding="async"
            width="600"
            height="450"
          />
          <span class="portfolio-expand-badge" aria-hidden="true">
            ${icons.expand}
          </span>
          <span class="portfolio-overlay">
            <span class="portfolio-overlay-cat">${item.category}</span>
            <span class="portfolio-overlay-title">${item.title}</span>
          </span>
        </button>
      `
      )
      .join('');

    $$('.portfolio-item', gridEl).forEach((btn) => {
      btn.addEventListener('click', () => {
        openLightbox(Number(btn.dataset.index));
      });
    });
  }

  function renderFilters() {
    filtersEl.innerHTML = portfolio.categories
      .map(
        (cat) => `
        <button
          type="button"
          role="tab"
          aria-selected="${cat === activeCategory}"
          class="filter-btn ${cat === activeCategory ? 'is-active' : ''}"
          data-category="${cat}"
        >
          ${cat}
        </button>
      `
      )
      .join('');

    $$('.filter-btn', filtersEl).forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.category;
        renderFilters();
        renderGrid();
      });
    });
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', showPrev);
  lightboxNext.addEventListener('click', showNext);

  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showPrev();
    if (event.key === 'ArrowRight') showNext();
  });

  // Suporte a swipe horizontal em telas touch
  let touchStartX = 0;
  lightbox.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  lightbox.addEventListener(
    'touchend',
    (e) => {
      const deltaX = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(deltaX) > 45) {
        if (deltaX > 0) showPrev();
        else showNext();
      }
    },
    { passive: true }
  );

  renderFilters();
  renderGrid();
}

function hydrateAbout() {
  const { about } = siteConfig;
  setText('#about-eyebrow', about.eyebrow);
  setText('#about-title', about.title);
  setText('#about-name', about.name);
  setText('#about-specialty', about.specialty);
  setText('#about-cta', about.ctaText);

  const img = $('#about-image');
  if (img) {
    img.src = about.image;
    img.alt = about.imageAlt;
  }

  const storyEl = $('#about-story');
  if (storyEl) {
    storyEl.innerHTML = about.story.map((p) => `<p>${p}</p>`).join('');
  }

  const detailsEl = $('#about-details');
  if (detailsEl) {
    detailsEl.innerHTML = about.details
      .map(
        (detail) => `
        <div class="about-detail-item">
          <dt>${detail.label}</dt>
          <dd>${detail.value}</dd>
        </div>
      `
      )
      .join('');
  }
}

function hydrateDifferentials() {
  const { differentialsSection } = siteConfig;
  setText('#diff-eyebrow', differentialsSection.eyebrow);
  setText('#diff-title', differentialsSection.title);
  setText('#diff-subtitle', differentialsSection.subtitle);

  const grid = $('#differentials-grid');
  if (!grid) return;

  grid.innerHTML = differentialsSection.items
    .map(
      (item) => `
      <article class="differential-card reveal">
        <span class="differential-icon" aria-hidden="true">
          ${icons[item.icon] || icons.sparkle}
        </span>
        <h3 class="differential-title">${item.title}</h3>
        <p class="differential-desc">${item.description}</p>
      </article>
    `
    )
    .join('');
}

function hydrateTestimonials() {
  const { testimonials } = siteConfig;
  const section = $('#depoimentos');
  if (!section) return;

  if (!testimonials.enabled || !testimonials.items.length) {
    section.hidden = true;
    return;
  }

  section.hidden = false;
  setText('#testimonials-eyebrow', testimonials.eyebrow);
  setText('#testimonials-title', testimonials.title);

  const grid = $('#testimonials-grid');
  if (!grid) return;

  grid.innerHTML = testimonials.items
    .map(
      (item) => `
      <figure class="testimonial-card reveal">
        <blockquote class="testimonial-quote">“${item.quote}”</blockquote>
        <figcaption>
          <span class="testimonial-author">${item.author}</span>
          ${item.service ? `<span class="testimonial-service">${item.service}</span>` : ''}
        </figcaption>
      </figure>
    `
    )
    .join('');
}

function hydrateContactAndFooter() {
  const { brand, contact, contactSection } = siteConfig;

  setText('#contact-eyebrow', contactSection.eyebrow);
  setText('#contact-title', contactSection.title);
  setText('#contact-subtitle', contactSection.subtitle);

  const contactWaIcon = $('#contact-wa-icon');
  if (contactWaIcon) contactWaIcon.innerHTML = icons.whatsapp;

  const contactIgIcon = $('#contact-ig-icon');
  if (contactIgIcon) contactIgIcon.innerHTML = icons.instagram;

  const igCta = $('#contact-instagram-cta');
  if (igCta) igCta.setAttribute('href', contact.instagramUrl);
  setText('#contact-instagram-handle', contact.instagramHandle);

  const infoWaIcon = $('#info-wa-icon');
  if (infoWaIcon) infoWaIcon.innerHTML = icons.whatsapp;
  setText('#contact-phone-link', contact.whatsappDisplay);

  const infoMapIcon = $('#info-map-icon');
  if (infoMapIcon) infoMapIcon.innerHTML = icons.mapPin;
  setText('#contact-address', contact.address);
  setText('#contact-address-complement', contact.addressComplement);

  const mapsLink = $('#contact-maps-link');
  if (mapsLink) mapsLink.setAttribute('href', contact.googleMapsUrl);

  const infoClockIcon = $('#info-clock-icon');
  if (infoClockIcon) infoClockIcon.innerHTML = icons.clock;

  const hoursList = $('#contact-hours-list');
  if (hoursList) {
    hoursList.innerHTML = contact.hours
      .map((row) => `<li><strong>${row.days}:</strong> ${row.time}</li>`)
      .join('');
  }

  // Footer
  setText('#footer-location', `${contact.address} — ${contact.addressComplement}`);
  const footerWa = $('#footer-whatsapp');
  if (footerWa) footerWa.innerHTML = icons.whatsapp;

  const footerIg = $('#footer-instagram');
  if (footerIg) {
    footerIg.setAttribute('href', contact.instagramUrl);
    footerIg.innerHTML = icons.instagram;
  }

  setText(
    '#footer-copyright',
    `© ${brand.copyrightYear} ${brand.studioName}. Todos os direitos reservados.`
  );

  // Botão flutuante de WhatsApp
  const waFloatIcon = $('#whatsapp-float-icon');
  if (waFloatIcon) waFloatIcon.innerHTML = icons.whatsapp;
}

function initHeaderAndMobileMenu() {
  const header = $('#site-header');
  const toggleBtn = $('#mobile-menu-toggle');
  const closeBtn = $('#mobile-close-btn');
  const drawer = $('#mobile-drawer');
  const backdrop = $('#mobile-backdrop');

  const onScroll = () => {
    if (window.scrollY > 16) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function openMenu() {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    backdrop.hidden = false;
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    backdrop.hidden = true;
    document.body.classList.remove('no-scroll');
  }

  toggleBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  $$('.mobile-nav-link', drawer).forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

function initRevealAnimations() {
  const targets = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

function bootstrap() {
  hydrateBrandAndSeo();
  hydrateHero();
  hydrateServices();
  hydrateExperience();
  initPortfolio();
  hydrateAbout();
  hydrateDifferentials();
  hydrateTestimonials();
  hydrateContactAndFooter();
  initHeaderAndMobileMenu();
  initRevealAnimations();
}

bootstrap();
