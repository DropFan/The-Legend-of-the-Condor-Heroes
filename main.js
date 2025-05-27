// 移动端菜单切换功能
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 添加滚动淡入效果
    const addFadeInOnScroll = () => {
        const elements = document.querySelectorAll('.section-title, .quote');
        
        const fadeInOnScroll = () => {
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight * 0.9) {
                    element.classList.add('fade-in');
                }
            });
        };
        
        // 初始检查元素
        fadeInOnScroll();
        
        // 滚动时检查元素
        window.addEventListener('scroll', fadeInOnScroll);
    };
    
    addFadeInOnScroll();
    
    // 随机显示名言警句
    const quotes = [
        {quote: "侠之大者，为国为民。", author: "郭靖"},
        {quote: "靖哥哥，你真是个傻瓜。", author: "黄蓉"},
        {quote: "我辈武人，当以国事为重。", author: "郭靖"},
        {quote: "生于乱世，当克己以安人。", author: "一灯大师"},
        {quote: "丐帮历来以行侠仗义为己任。", author: "洪七公"}
    ];
    
    const quoteElement = document.querySelector('.quote');
    const quoteAuthorElement = quoteElement?.nextElementSibling;
    
    if (quoteElement && quoteAuthorElement) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = `"${randomQuote.quote}"`;
        quoteAuthorElement.textContent = `— ${randomQuote.author}`;
    }
});

// 添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 添加加载动画效果
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // 为所有页面主要元素添加淡入效果
    const mainElements = document.querySelectorAll('section > div');
    mainElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, 100 * index);
    });
});
















