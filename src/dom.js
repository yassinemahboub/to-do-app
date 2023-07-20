export function setupTabs() {
    const tabs = document.querySelectorAll(".tabs__button");
    const tabContents = document.querySelectorAll(".tabs__content");
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.dataset.forTab;
        const targetContent = document.querySelector(`[data-tab="${tabId}"]`);
  
        tabs.forEach(tabItem => tabItem.classList.remove('tabs__button--active'));
        tabContents.forEach(contentItem => contentItem.classList.remove('tabs__content--active'));
  
        tab.classList.add('tabs__button--active');
        targetContent.classList.add('tabs__content--active');
      });
    });
  }