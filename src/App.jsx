import { useState } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const galleryOptions = {
  bgOpacity: 0.92,
  padding: { top: 32, bottom: 32, left: 24, right: 24 },
  showHideAnimationType: 'zoom',
  wheelToZoom: true,
  arrowPrev: false,
  arrowNext: false,
  counter: false,
};

function GalleryImage({ src, alt, width, height, className = 'guide-shot' }) {
  return (
    <Item original={src} thumbnail={src} width={width} height={height} alt={alt}>
      {({ ref, open }) => (
        <button type="button" className={className} onClick={open}>
          <img ref={ref} src={src} alt={alt} />
        </button>
      )}
    </Item>
  );
}

function ObsSetup() {
  return (
    <section className="program-guide" aria-labelledby="obs-guide-title">
      <p id="obs-guide-title" className="program-guide-intro">
        How to implement the new version of the OBS configuration.
      </p>
      <Gallery options={galleryOptions}>
        <ol className="setup-steps">
          <li className="setup-step">
            <h3 className="setup-step-title">Download</h3>
            <p className="setup-step-copy">Download the new, actual version of OBS scene collection file to your computer from CRM technical chat.</p>
          </li>
          <li className="setup-step">
            <h3 className="setup-step-title">Choose import</h3>
            <p className="setup-step-copy">In OBS, open Scene Collection and choose Import.</p>
            <GalleryImage
              src="/images/obs-import.png"
              alt="OBS Scene Collection menu with Import selected"
              width={458}
              height={371}
            />
          </li>
          <li className="setup-step">
            <h3 className="setup-step-title">Browse for the new file</h3>
            <p className="setup-step-copy">Click Browse and select Main_v2.json from your Downloads folder.</p>
            <GalleryImage
              src="/images/obs-browse.png"
              alt="Import Scene Collection window with Browse circled and Main_v2.json selected"
              width={1024}
              height={508}
            />
          </li>
          <li className="setup-step">
            <h3 className="setup-step-title">Switch to new profile</h3>
            <p className="setup-step-copy">Open Scene Collection again and switch to Main v2.</p>
            <GalleryImage
              src="/images/obs-switch.png"
              alt="OBS Scene Collection menu with Main v2 selected"
              width={521}
              height={714}
            />
          </li>
        </ol>
      </Gallery>
    </section>
  );
}

function CrmGuide() {
  return (
    <section className="program-guide">
      <p className="program-guide-intro">
        This is a CRM accessible by this link:{' '}
        <a className="crm-link" href="https://crm.hitlane.app/" target="_blank" rel="noopener noreferrer">
          https://crm.hitlane.app/
        </a>
        . It is the main program for our communication. There you can also find spreadsheets, notes, chat, calendar, and more.
      </p>
      <p className="crm-chat-warning">❗ You have to make sure that /chat is ALWAYS open like this in Brave browser</p>
      <Gallery options={galleryOptions}>
        <GalleryImage
          className="crm-chat-example"
          src="/images/hitlane-chat.png"
          alt="Hitlane CRM chat open in Brave at crm.hitlane.app/chat"
          width={788}
          height={334}
        />
      </Gallery>
    </section>
  );
}

function BreakMonitorGuide() {
  return (
    <section className="program-guide" aria-labelledby="break-monitor-guide-title">
      <p id="break-monitor-guide-title" className="program-guide-intro">
        Break Monitor tracks when coworkers start and finish their breaks. Open it at{' '}
        <a
          className="crm-link"
          href="https://break-monitor-production.up.railway.app/staff"
          target="_blank"
          rel="noopener noreferrer"
        >
          break-monitor-production.up.railway.app/staff
        </a>
        {' '}and follow these steps every time you take a break.
      </p>
      <Gallery options={galleryOptions}>
        <ol className="setup-steps">
          <li className="setup-step">
            <h3 className="setup-step-title">Sign in</h3>
            <p className="setup-step-copy">
              Find and select your name, then enter your 4-digit PIN.
            </p>
            <GalleryImage
              src="/images/break-monitor-sign-in.png"
              alt="Break Monitor staff sign-in screen showing the coworker list"
              width={1024}
              height={352}
            />
          </li>
          <li className="setup-step">
            <h3 className="setup-step-title">Confirm that you are on shift</h3>
            <p className="setup-step-copy">
              If the page says that you left for the day, select <strong>Back on shift</strong>. If you are already on shift, continue to the next step. Use <strong>Sign out</strong> only when you finish your workday.
            </p>
            <GalleryImage
              src="/images/break-monitor-start-shift.png"
              alt="Break Monitor profile screen with Back on shift and Sign out controls"
              width={1024}
              height={288}
            />
          </li>
          <li className="setup-step">
            <h3 className="setup-step-title">Choose your break</h3>
            <p className="setup-step-copy">
              Select the correct allowance: 30 minutes for lunch, 15 minutes for a long break, 10 minutes for tea, or 5 minutes for a quick break. Then select <strong>Leave</strong> to start the break.
            </p>
            <GalleryImage
              src="/images/break-monitor-select-break.png"
              alt="Break Monitor screen for choosing a 30, 15, 10, or 5 minute break"
              width={1024}
              height={338}
            />
          </li>
          <li className="setup-step">
            <h3 className="setup-step-title">Keep the break timer running</h3>
            <p className="setup-step-copy">
              The countdown shows your remaining break time, and your manager can see the active break on the dashboard. When you return, select <strong>End break &amp; return to work</strong>.
            </p>
            <GalleryImage
              src="/images/break-monitor-active-break.png"
              alt="Break Monitor showing an active 30-minute break countdown"
              width={1024}
              height={416}
            />
          </li>
          <li className="setup-step">
            <h3 className="setup-step-title">Wait for the break to end</h3>
            <p className="setup-step-copy">
              Wait while the app displays <strong>Ending break…</strong>. Do not close or refresh the page until processing finishes and your on-shift screen returns.
            </p>
            <GalleryImage
              src="/images/break-monitor-ending-break.png"
              alt="Break Monitor processing the end of an active break"
              width={1024}
              height={402}
            />
          </li>
        </ol>
      </Gallery>
    </section>
  );
}

function KeepOpenIndicator({ program }) {
  const [visible, setVisible] = useState(false);
  const tooltipId = `${program.icon}-keep-open`;

  return (
    <div className="keep-open" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <button
        type="button"
        className="keep-open-button"
        aria-label={`${program.name}: keep open`}
        aria-describedby={visible ? tooltipId : undefined}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        onClick={() => setVisible(true)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setVisible(false);
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v8M7 5.5a8 8 0 1 0 10 0" />
        </svg>
      </button>
      {visible && <span className="keep-open-tooltip" id={tooltipId} role="tooltip">Keep it always open</span>}
    </div>
  );
}

const keepOpenPrograms = [
  { name: 'OBS Studio', icon: 'obs', url: '/programs/obs' },
  {
    name: 'Brave browser',
    icon: 'brave',
    url: '/programs/brave',
    description:
      'Brave is a free web browser based on Chromium (like Chrome). It blocks ads and trackers by default, so pages load faster and browsing is more private.',
  },
  {
    name: 'Amnezia VPN',
    icon: 'amnezia',
    url: '/programs/amnezia',
    description:
      'Amnezia VPN is an open-source VPN. It encrypts your internet connection so you can browse privately and reach sites that may be blocked.',
  },
];

const programs = [
  ...keepOpenPrograms,
  {
    name: 'AnyDesk',
    icon: 'anydesk',
    url: '/programs/anydesk',
    iconExt: 'svg',
    description:
      'AnyDesk is a remote desktop app. It lets you connect to another computer over the internet to view the screen, control it, and transfer files.',
  },
  {
    name: 'Telegram',
    icon: 'telegram',
    url: '/programs/telegram',
    iconExt: 'svg',
    description:
      'Telegram is a fast cloud-based messenger. You can send messages, photos, videos, and files, and use the same account on phone and computer at the same time.',
  },
];

const tools = [
  {
    name: 'Break monitor',
    icon: 'break-monitor',
    url: '/tools/break-monitor',
    iconExt: 'svg',
  },
  {
    name: 'CRM',
    icon: 'crm',
    url: '/tools/crm',
  },
];

function programIconSrc(program) {
  return `/icons/${program.icon}.${program.iconExt ?? 'png'}`;
}

function ProgramGrid({ items, showKeepOpen = false }) {
  return (
    <ul className="program-grid">
      {items.map((program) => (
        <li className="program-card" key={program.icon}>
          <a className="program-link" href={program.url}>
            <span className="program-tile">
              <img src={programIconSrc(program)} alt="" width="56" height="56" />
            </span>
            <span>{program.name}</span>
          </a>
          {showKeepOpen ? <KeepOpenIndicator program={program} /> : null}
        </li>
      ))}
    </ul>
  );
}

function DetailPage({ backHref, backLabel, item, extra }) {
  return (
    <>
      <a className="back-link" href={backHref}>{`← ${backLabel}`}</a>
      <h2 id="page-title" className={item?.description || extra ? 'program-page-title' : undefined}>
        {item?.name ?? 'Page not found'}
      </h2>
      {item?.description ? <p className="program-about">{item.description}</p> : null}
      {extra}
    </>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const selectedProgram = programs.find((program) => program.url === path);
  const selectedTool = tools.find((tool) => tool.url === path);
  const isHome = path === '/';
  const isProgramsIndex = path === '/programs';
  const isToolsIndex = path === '/tools';
  const programsNavActive = isProgramsIndex || Boolean(selectedProgram);
  const toolsNavActive = isToolsIndex || Boolean(selectedTool);

  return (
    <main className="page">
      <section className="documentation" aria-labelledby="onboarding-title">
        <header className="documentation-header">
          <a className="header-brand" href="/">
            <span className="header-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15 9 12s1.4-4.4 4.5-6.5C16.3 3.6 20 4 20 4s.4 3.7-1.5 6.5C16.4 13.6 12 15 12 15Z" />
                <circle cx="16" cy="8" r="1.5" />
                <path d="m9 12-4-1 3-4 4-.5M12 15l1 4 4-3 .5-4M7.5 14.5c-2.5 0-3 2-3.5 5 3-.5 5-1 5-3.5" />
              </svg>
            </span>
            <h1 id="onboarding-title">On boarding</h1>
          </a>
          <nav className="header-nav" aria-label="Primary">
            <a
              className={`header-nav-link${programsNavActive ? ' is-active' : ''}`}
              href="/programs"
              aria-current={isProgramsIndex ? 'page' : undefined}
            >
              Programs
            </a>
            <a
              className={`header-nav-link${toolsNavActive ? ' is-active' : ''}`}
              href="/tools"
              aria-current={isToolsIndex ? 'page' : undefined}
            >
              Tools
            </a>
          </nav>
        </header>
        {isHome ? (
          <>
            <section className="programs" aria-labelledby="programs-title">
              <h2 id="programs-title" className="programs-title">❗ ALWAYS KEEP THESE PROGRAMS OPEN</h2>
              <p className="programs-description">Keep these programs running on your PC throughout your workday. They are required for your work setup.</p>
              <ProgramGrid items={keepOpenPrograms} showKeepOpen />
            </section>
            <section className="tools" aria-labelledby="tools-title">
              <h2 id="tools-title" className="tools-title">Our tools</h2>
              <ProgramGrid items={tools} />
            </section>
            <section className="tools" aria-labelledby="all-programs-title">
              <h2 id="all-programs-title" className="tools-title">Programs</h2>
              <p className="programs-description">All programs used in this work setup.</p>
              <ProgramGrid items={programs} />
            </section>
          </>
        ) : isProgramsIndex ? (
          <section className="programs" aria-labelledby="programs-title">
            <h2 id="programs-title" className="programs-index-title">Programs</h2>
            <p className="programs-description">All programs used in this work setup.</p>
            <ProgramGrid items={programs} />
          </section>
        ) : isToolsIndex ? (
          <section className="programs" aria-labelledby="tools-title">
            <h2 id="tools-title" className="tools-title">Our tools</h2>
            <ProgramGrid items={tools} />
          </section>
        ) : selectedProgram ? (
          <section className="programs" aria-labelledby="page-title">
            <DetailPage
              backHref="/programs"
              backLabel="Programs"
              item={selectedProgram}
              extra={selectedProgram.icon === 'obs' ? <ObsSetup /> : null}
            />
          </section>
        ) : selectedTool ? (
          <section className="programs" aria-labelledby="page-title">
            <DetailPage
              backHref="/tools"
              backLabel="Our tools"
              item={selectedTool}
              extra={
                selectedTool.icon === 'crm'
                  ? <CrmGuide />
                  : selectedTool.icon === 'break-monitor'
                    ? <BreakMonitorGuide />
                    : null
              }
            />
          </section>
        ) : (
          <section className="programs" aria-labelledby="page-title">
            <DetailPage backHref="/" backLabel="Home" item={null} />
          </section>
        )}
      </section>
    </main>
  );
}
