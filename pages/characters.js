document.addEventListener('DOMContentLoaded', function() {
    const characterNavData = [
        { type: 'mainOverview', text: '角色总览', file: '0_overview.html' },
        { 
            type: 'category', 
            title: '核心主角', 
            items: [
                { name: "郭靖", file: "1_guo_jing.html" },
                { name: "黄蓉", file: "1_huang_rong.html" },
                { name: "杨康", file: "1_yang_kang.html" },
                { name: "穆念慈", file: "1_mu_nianci.html" },
            ]
        },
        { 
            type: 'categoryWithOverview', 
            title: '天下五绝', 
            overviewFile: '2_five_greats_intro.html', 
            items: [
                { name: "黄药师（东邪）", file: "2_huang_yaoshi.html" },
                { name: "欧阳锋（西毒）", file: "2_ouyang_feng.html" },
                { name: "一灯大师（南帝）", file: "2_yideng_dashi.html" },
                { name: "洪七公（北丐）", file: "2_hong_qigong.html" },
                { name: "王重阳（中神通）", file: "2_wang_chongyang.html" },
            ]
        },
        { 
            type: 'categoryWithOverview', 
            title: '关键教师与导师', 
            overviewFile: '3_key_teachers_intro.html',
            items: [
                { name: "周伯通", file: "3_zhou_botong.html" },
                { name: "江南七怪", file: "3_jiangnan_seven_freaks.html" },
                { name: "全真七子", file: "3_quanzhen_seven_masters.html" }, // This is an overview for the group
                { name: "丘处机", file: "3_qiu_chuji.html" },
                { name: "马钰", file: "3_ma_yu.html" },
                { name: "王处一", file: "3_wang_chuyi.html" },
            ]
        },
        { 
            type: 'categoryWithOverview', 
            title: '主要对手与反派', 
            overviewFile: '4_key_opponents_intro.html',
            items: [
                 { name: "欧阳克", file: "4_ouyang_ke.html" },
                 { name: "完颜洪烈", file: "4_wanyan_honglie.html" },
                 { name: "包惜弱", file: "4_bao_xiruo.html" }, // Included as per original structure
                 { name: "李萍", file: "4_li_ping.html" },     // Included as per original structure
                 { name: "梅超风", file: "4_mei_chaofeng.html" },
                 { name: "陈玄风", file: "4_chen_xuanfeng.html" },
                 { name: "裘千仞 & 裘千丈", file: "4_qiu_qianren_qianzhang.html" },
            ]
        },
        { 
            type: 'categoryWithOverview', 
            title: '其他重要人物', 
            overviewFile: '5_other_important_intro.html',
            items: [
                 { name: "陆冠英", file: "5_lu_guanying.html" },
                 { name: "程瑶迦", file: "5_cheng_yaojia.html" },
                 { name: "傻姑", file: "5_sha_gu.html" },
                 { name: "瑛姑", file: "5_ying_gu.html" },
                 { name: "华筝", file: "5_hua_zheng.html" },
                 { name: "陆乘风", file: "5_lu_chengfeng.html" },
                 { name: "铁木真（成吉思汗）", file: "5_tie_muzhen.html" },
            ]
        },
        { 
            type: 'categoryWithOverview', 
            title: '次要及背景人物', 
            overviewFile: '6_other_minor_intro.html',
            items: [
                 { name: "完颜洪烈麾下高手", file: "6_villain_group_sha_etc.html" },
                 { name: "柯辟邪", file: "6_ke_bixie.html" },
                 { name: "冯蘅", file: "6_feng_heng.html" },
                 { name: "枯木大师", file: "6_kumu_dashi.html" },
                 { name: "拖雷", file: "6_tolui.html" },
            ]
        }
    ];

    const sidebarNav = document.getElementById('character-sidebar-nav');
    const characterContentDiv = document.getElementById('character-content');
    const characterDataBasePath = 'character_data/'; // Path relative to characters.html

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    function generateNavigation() {
        if (!sidebarNav) return;
        let navHtml = '';

        characterNavData.forEach(categoryData => {
            navHtml += '<li>';
            if (categoryData.type === 'mainOverview') {
                navHtml += `<a href="#" data-file="${categoryData.file}" class="character-link block py-2 px-3 rounded-md hover:bg-amber-100 transition-colors font-bold">${categoryData.text}</a>`;
            } else if (categoryData.type === 'category') {
                navHtml += `<span class="font-semibold text-amber-700 block mt-4 mb-2">${categoryData.title}</span>`;
                if (categoryData.items && categoryData.items.length > 0) {
                    navHtml += '<ul class="ml-4 space-y-1 text-sm">';
                    categoryData.items.forEach(item => {
                        navHtml += `<li><a href="#" data-file="${item.file}" class="character-link block py-1 px-3 rounded-md hover:bg-amber-100 transition-colors">${item.name}</a></li>`;
                    });
                    navHtml += '</ul>';
                }
            } else if (categoryData.type === 'categoryWithOverview') {
                navHtml += `<a href="#" data-file="${categoryData.overviewFile}" class="character-link block py-2 px-3 rounded-md hover:bg-amber-100 transition-colors font-semibold mt-4 mb-2">${categoryData.title}</a>`;
                if (categoryData.items && categoryData.items.length > 0) {
                    navHtml += '<ul class="ml-4 space-y-1 text-sm">';
                    categoryData.items.forEach(item => {
                        navHtml += `<li><a href="#" data-file="${item.file}" class="character-link block py-1 px-3 rounded-md hover:bg-amber-100 transition-colors">${item.name}</a></li>`;
                    });
                    navHtml += '</ul>';
                }
            }
            navHtml += '</li>';
        });
        sidebarNav.innerHTML = navHtml;
        attachEventListenersToLinks();
    }

    async function loadCharacterContent(filePath) {
        try {
            characterContentDiv.innerHTML = '<div class="text-center text-stone-500 py-8">加载中...</div>';
            const response = await fetch(characterDataBasePath + filePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const content = await response.text();
            characterContentDiv.innerHTML = content;

            const allLinks = sidebarNav.querySelectorAll('.character-link');
            allLinks.forEach(link => link.classList.remove('bg-amber-200', 'font-semibold', 'text-amber-900'));
            
            const activeLink = sidebarNav.querySelector(`.character-link[data-file="${filePath}"]`);
            if (activeLink) {
                activeLink.classList.add('bg-amber-200', 'font-semibold', 'text-amber-900');
            }

        } catch (error) {
            console.error('Error loading character content:', error);
            characterContentDiv.innerHTML = '<div class="text-center text-red-500 py-8">内容加载失败。请稍后再试。</div>';
        }
    }

    function attachEventListenersToLinks() {
        const links = sidebarNav.querySelectorAll('.character-link');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const filePath = this.getAttribute('data-file');
                if (filePath) {
                    loadCharacterContent(filePath);
                }
            });
        });
    }

    // Initial setup
    generateNavigation();
    loadCharacterContent('0_overview.html'); // Load default content
});
