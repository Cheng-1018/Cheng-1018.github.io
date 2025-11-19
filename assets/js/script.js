// ============================================
// 移动端侧边栏切换
// ============================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');
const contentArea = document.querySelector('.content-area');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');

        // 切换图标
        const icon = mobileMenuBtn.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // 点击内容区域关闭侧边栏（仅移动端）
    contentArea.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('active') && !e.target.closest('.mobile-menu-btn')) {
            sidebar.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
}

// ============================================
// 页面滚动时关闭移动端侧边栏
// ============================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('active')) {
        const currentScroll = window.pageYOffset;
        if (Math.abs(currentScroll - lastScroll) > 50) {
            sidebar.classList.remove('active');
            if (mobileMenuBtn) {
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        }
        lastScroll = currentScroll;
    }
});// ============================================
// 平滑入场动画
// ============================================
window.addEventListener('load', () => {
    const noteSections = document.querySelectorAll('.note-section');
    noteSections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ============================================
// 返回顶部按钮（可选）
// ============================================
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    z-index: 999;
    transition: all 0.3s ease;
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.transform = 'scale(1.1) translateY(-5px)';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.transform = 'scale(1) translateY(0)';
});
