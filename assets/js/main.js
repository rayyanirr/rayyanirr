/**
 * Main Application Logic
 * Interactive UI behaviors, benchmark simulator, skills filtering, and copy helpers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons if loaded
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Navbar scroll background change
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-slate-950/90', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-xl');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-slate-950/90', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-xl');
      navbar.classList.add('bg-transparent');
    }
  });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Skills Filtering Tabs
  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active classes
      skillTabs.forEach(t => {
        t.classList.remove('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/40');
        t.classList.add('bg-slate-900/60', 'text-slate-400', 'border-slate-800');
      });

      // Add active class to clicked tab
      tab.classList.remove('bg-slate-900/60', 'text-slate-400', 'border-slate-800');
      tab.classList.add('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/40');

      const filter = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        const categories = card.getAttribute('data-category')?.split(' ') || [];
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hidden');
          card.classList.add('animate-fadeIn');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // SQL Benchmark Simulator
  const runSimBtn = document.getElementById('run-benchmark-btn');
  const benchmarkLogs = document.getElementById('benchmark-logs');
  const benchmarkProgress = document.getElementById('benchmark-progress-bar');
  const benchmarkStatus = document.getElementById('benchmark-status-text');

  if (runSimBtn && benchmarkLogs && benchmarkProgress) {
    let isRunning = false;

    runSimBtn.addEventListener('click', () => {
      if (isRunning) return;
      isRunning = true;

      const lang = localStorage.getItem('app_lang') || 'es';
      const runningTxt = lang === 'es' ? 'Ejecutando Benchmark...' : 'Running Benchmark...';
      const doneTxt = lang === 'es' ? '¡Prueba finalizada con éxito!' : 'Benchmark completed successfully!';

      runSimBtn.disabled = true;
      runSimBtn.classList.add('opacity-50', 'cursor-not-allowed');
      runSimBtn.innerText = runningTxt;

      benchmarkProgress.style.width = '0%';
      benchmarkLogs.innerHTML = '';

      const logLines = [
        `[${new Date().toLocaleTimeString()}] > CONNECTING SQL SERVER HOST (KFC DB Cluster)...`,
        `[${new Date().toLocaleTimeString()}] > UNOPTIMIZED STATE: Query Response: 252,400ms (N+1 queries detected)`,
        `[${new Date().toLocaleTimeString()}] > APPLYING INDEXING & QUERY REFACTOR (EXISTS vs IN, INNER JOIN optimizations)...`,
        `[${new Date().toLocaleTimeString()}] > ENABLING REDIS CACHE BUFFER & STREAM PAYLOAD (JSON:API)...`,
        `[${new Date().toLocaleTimeString()}] > BENCHMARK EXECUTED: 10,000 requests processed.`,
        `[${new Date().toLocaleTimeString()}] > OPTIMIZED STATE: Avg latency: 380ms | CPU Load: -85% | Throughput: 1,100 req/sec`
      ];

      let currentStep = 0;

      const interval = setInterval(() => {
        if (currentStep < logLines.length) {
          const logItem = document.createElement('div');
          logItem.className = 'font-mono text-xs mb-1 text-slate-300 animate-fadeIn';
          if (currentStep === 1) logItem.classList.add('text-amber-400');
          if (currentStep === 4 || currentStep === 5) logItem.classList.add('text-emerald-400', 'font-semibold');
          logItem.innerText = logLines[currentStep];
          benchmarkLogs.appendChild(logItem);
          benchmarkLogs.scrollTop = benchmarkLogs.scrollHeight;

          const pct = Math.round(((currentStep + 1) / logLines.length) * 100);
          benchmarkProgress.style.width = `${pct}%`;

          currentStep++;
        } else {
          clearInterval(interval);
          if (benchmarkStatus) benchmarkStatus.innerText = doneTxt;
          runSimBtn.disabled = false;
          runSimBtn.classList.remove('opacity-50', 'cursor-not-allowed');
          const resetBtnTxt = lang === 'es' ? 'Reejecutar Test' : 'Re-run Benchmark';
          runSimBtn.innerText = resetBtnTxt;
          isRunning = false;

          // Trigger a pulse highlight on the After box
          const afterBox = document.getElementById('benchmark-after-box');
          if (afterBox) {
            afterBox.classList.add('ring-2', 'ring-emerald-400', 'scale-105');
            setTimeout(() => {
              afterBox.classList.remove('scale-105');
            }, 600);
          }
        }
      }, 500);
    });
  }
});

// Copy to Clipboard Utility
function copyToClipboard(text, elementId) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById(elementId);
    if (btn) {
      const originalText = btn.innerText;
      const lang = localStorage.getItem('app_lang') || 'es';
      btn.innerText = lang === 'es' ? '¡Copiado!' : 'Copied!';
      btn.classList.add('bg-emerald-500', 'text-slate-950');
      
      setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.remove('bg-emerald-500', 'text-slate-950');
      }, 2000);
    }
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
}
