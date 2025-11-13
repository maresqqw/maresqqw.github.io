(function () {
	var storageKey = 'theme';
	var root = document.documentElement;
	function applyTheme(theme) {
		if (theme === 'dark') {
			root.setAttribute('data-theme', 'dark');
		} else {
			root.removeAttribute('data-theme');
		}
		var btn = document.getElementById('theme-toggle');
		if (btn) {
			var isDark = theme === 'dark';
			btn.setAttribute('aria-pressed', String(isDark));
			btn.textContent = isDark ? 'Light mode' : 'Dark mode';
		}
	}

	function getPreferred() {
		var saved = null;
		try { saved = localStorage.getItem(storageKey); } catch (e) {}
		if (saved === 'dark' || saved === 'light') return saved;
		return 'dark';
	}

	document.addEventListener('DOMContentLoaded', function () {
		var current = getPreferred();
		applyTheme(current);
		var btn = document.getElementById('theme-toggle');
		if (btn) {
			btn.addEventListener('click', function () {
				var next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
				applyTheme(next);
				try { localStorage.setItem(storageKey, next); } catch (e) {}
			});
		}
	});
})();


