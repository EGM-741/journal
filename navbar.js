class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setup();
    }
    THRID_PANEL_TABS = [
        ["объявления", "","notification"],
        ["вакансии", "","vacancies"],
        ["вакансии объединенные", "","vacancies_united"],
        ["соискатели", "","cosearchers"],
        ["отклики", "","responces"],
        ["фио", "","fio"],
        ["Адреса", "","addresses"],
        ["Компании", "","companies"],
        ["Учебные заведения", "","edu"],
        ["Сокр.Ю.Ф.", "","short_name"],
        ["Альтернативные", "","alt_name"],
        ["Филиалы", "","filial"],
        ["Квалификации", "","qualifications"],
        ["Специальности", "","professions"],
        ["Телефонные коды", "","phone_codes"],
        ["Администраторы", "","admins"],
        ["email рассылка", "","mailing"],
        ["КАК БЫЛО КАК НАДО", "","how_was_how_need"],
        ["ПРЕФИКСЫ СЧЕТОВ", "","prefixes"],
        ["ПОИСК", "","search"],
        ["БАНКИ", "","banks"],
        ["РУБРИКАТОР", "","","rubricator"],
    ];
    THIRD_PANEL_TAB_TEMPLATE = (tabName, icon, id, { classes, tabNameClasses } = { classes: "", tabNameClasses: "" }) => {
        return /*html*/ `
        <div class="third-panel__tab" id="${id}">
            <div class="tooltip" tooltip="${tabName}" style="position: absolute; width: calc(100%/9); height: 70px; margin-top: -5px;"></div>
            ${icon ? `<span  class="third-panel__tab-icon icon ads-icon in-panel ${classes}">${icon}</span>` : ""}
            <p class="third-panel__tab-text ${tabNameClasses}">${tabName}</p>
        </div>
    `;
    };
    render() {
        const STYLE = /*html*/ `
            <style>
                .no-white{
                    white-space: nowrap !important;
                }
                .reversed{
                    display: inline-block !important;
                    transform: rotate(180deg);
                }
                navbar-elem{
                    width: 100%;
                    display: block;
                }
                .panels__panel {
                    box-sizing: border-box;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                    height: min-content;
                }
                #navbar {
                    display: flex;
                    flex: 1eft;
                    flex-direction: column;
                    margin-bottom: 50px;
                }
                .second-panel {
                    margin-left: 10px;
                    padding-right: 15px;
                }
                .second-panel__tab {
                    display: flex;
                    flex: 1eft;
                    justify-content: space-around ;
                    height: 60px;
                    box-sizing: border-box;
                    font-size: 18px;
                    text-transform: capitalize;
                }
                .second-panel__tab > p {
                    font-size: inherit;
                }
                .second-panel .tab > span.icon {
                    font-size: 35px;
                }
                .second-panel .tab:hover > span.icon {
                    color: white;
                }
                .second-panel .tab:hover {
                    background-color: var(--blue);
                    color: white;
                }
                .second-panel .tab {
                    display: flex;
                    align-items: center;
                }
                .third-panel{
                    align-items: start;
                    flex: 1eft;
                    row-gap: 20px;
                    box-sizing: border-box;
                    padding: 25px 5px 20px 10px;
                    background-color: var(--blue);
                    position: absolute;
                }
                .third-panel__tab {
                    padding-left: 4px;
                    padding-right: 4px;
                    box-sizing: border-box;
                    font-weight: 100;
                    color: white;
                    max-width: calc(95/881*100vw);
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 18px;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .third-panel__tab_active{
                    color: var(--yellow);
                    font-weight: 900;
                    font-family: 'Inter-Bold'
                }
                span.third-panel__tab-icon {
                    font-weight: normal;
                    color: inherit;
                    font-size: 30px;
                    margin-bottom: 6px;
                }
                .third-panel__tab-text {
                    font-weight: inherit;
                    font-family: inherit;
                    color: inherit;
                    font-size: inherit;
                    text-transform: uppercase;
                    text-align: center;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: wrap;
                }
                #vacancies_united .third-panel__tab-text {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }
                .panels {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .other-tabs{
                    display: none;
                }
                .other-tabs_active{
                    display: contents;
                }
                .third-panel__tab.more{
                    align-self: end;
                }
                .third-panel__tab.more > p.third-panel__tab-text{
                    text-align: center;
                }
                .third-panel__tab.more > p.third-panel__tab-text > span{
                    position: absolute;
                }
                .third-panel.journals {
                        visibility: hidden;
                    }
                    .third-panel.journals.visible {
                        visibility: visible;
                        position: relative;
                    }
                @media (width <= 880px) {
                    p.third-panel__tab-text{
                        font-size: 18px;
                    }
                    div#navbar {
                        display: none;
                        grid-template-columns: 2fr 5fr;
                        padding: 0;
                    }
                    .panels {
                        display: grid;
                        width: 100%;
                        grid-template-rows: 1fr;
                    }
                    .second-panel{
                        grid-auto-flow: row;
                    }
                    .third-panel__tab.more{
                        display: none;
                    }

                    .panels__panel{
                        grid-template-columns: none;
                    }
                    div.third-panel{
                        align-items: center;
                        column-gap: 10px;
                        row-gap: 0;
                        padding: 0;
                        padding-right: 25px;
                        padding-left: 15px;
                        box-sizing: border-box;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: repeat(11, minmax(50px, auto));
                    }
                    .other-tabs{
                        display: contents;
                    }
                    .second-panel__tab {
                        height: 50px;
                        background-color: white;
                        color: var(--blue);
                    }
                    .tab_active {
                        background-color: var(--blue);
                    }
                    .tab_active > p {
                        color: white;
                    }
                    div.second-panel__tab > p {
                        font-size: 18px;
                        text-align: left;
                        width: 100%;
                        padding-left: 25px;
                    }
                    .third-panel__tab > span.icon{
                        height: auto;
                        font-size: 20px;
                    }
                    p.third-panel__tab-text {
                        box-sizing: border-box;
                        padding-left: 10px;
                        width: fit-content;
                        text-align: end;
                        font-size: 18px;
                        text-transform: uppercase;
                        white-space: nowrap;
                    }
                    .third-panel__tab-icon.icon {
                        display: block;
                        font-size: 26px;
                    }
                    .third-panel__tab {
                        width: 100%;
                        overflow: hidden;
                        display: flex;
                        flex-direction: row;
                        justify-content: start;
                        /* color: white; */
                        cursor: pointer;
                        max-width: none;
                    }
                    div.control-panel {
                        margin-top: 20px;
                    }
                    .third-panel__content-wrapper {
                        background-color: white;
                    }
                }
                @media (width <= 1560px) {
                    .third-panel__tab {
                        flex: 1;
                        text-align: center;
                    }
                }
                @media (width <= 1250px) {
                    .third-panel__tab-text {
                        font-size: 18px;
                    }
                }
                @media (width <= 1150px) {
                    .second-panel__tab {
                        font-size: 16px;
                    }
                    .third-panel__tab-text {
                        font-size: 16px;
                    }
                }
            </style>
        `;
        this.innerHTML = /*html*/ `
        ${STYLE}
            <div class="mobile-control__menu-button">
                <p>Меню</p>
                <span class="icon burger"></span>
            </div>
            <div class="first-panel">
                <div class="control">
                    <div class="first-panel__control-exit">
                        <span class="icon"></span>
                        <p>Войти</p>
                    </div>
                </div>
            </div>
            <div id="navbar">
                <div class="panels__panel second-panel ">
                    <div class="tab second-panel__tab" id="interface_tab">
                        <p>Интерфейс</p>
                    </div>
                    <div class="tab second-panel__tab" id="social_tab">
                        <p>Соц. сети</p>
                    </div>
                    <div class="tab second-panel__tab tab_active" id="journals_tab">
                        <p>Журналы</p>
                    </div>
                    <div class="tab second-panel__tab" id="import_tab">
                        <p>Импорт</p>
                    </div>
                    <div class="tab second-panel__tab" id="export_tab">
                        <p>Экспорт</p>
                    </div>

                    <div class="tab second-panel__tab" id="users_tab" style="word-break: break-all;">
                        <p>Пользователи</p>
                    </div>
                    <div class="tab second-panel__tab" id="emails_tab">
                        <p>Email ящики</p>
                    </div>
                    <div class="tab second-panel__tab" style="word-break: auto-phrase;">
                        <p>Ключи. Пароли</p>
                    </div>
                    <div class="tab second-panel__tab">
                        <p>Разное</p>
                    </div>
                </div>
                <div class="third-panel journals panels__panel">
                    ${(() => {
                        let markup = "";
                        for (const tab of this.THRID_PANEL_TABS.slice(0, 8)) {
                            if (tab[0] == "вакансии объед") {
                                markup += this.THIRD_PANEL_TAB_TEMPLATE(tab[0], tab[1], tab[2], {tabNameClasses: "no-white" });
                                continue;
                            }
                            markup += this.THIRD_PANEL_TAB_TEMPLATE(tab[0], tab[1], tab[2]);
                        }
                        return markup;
                    })()}
                    <div class="third-panel__tab more">
                        <p class="third-panel__tab-text">
                            <span style="width: 100%; text-align: center; position: static;">Все 22</span>
                            <br> журнала <span class="icon reversed" style="padding-left: 5px;"></span></p>
                    </div>
                    <div class="other-tabs">
                        ${(() => {
                            let markup = "";
                            for (const [index, tab] of this.THRID_PANEL_TABS.slice(8).entries()) {
                                if (index == 8) {
                                    markup += `<div class="third-panel__tab more"></div>`;
                                }
                                markup += this.THIRD_PANEL_TAB_TEMPLATE(tab[0], tab[1]);
                            }
                            return markup;
                        })()}
                    </div>
                </div>
            </div>
        `;
    }
    setup() {
        this.querySelectorAll(".second-panel__tab").forEach(el => {
            el.addEventListener("click", () => {
                el.classList.add("tab_active");
            });
            document.addEventListener("click", event => {
                const isAnotherTabClicked = Array.from(document.querySelectorAll(".second-panel__tab")).filter(el => {
                    return el.contains(event.target);
                }).length;

                if (!el.contains(event.target) && isAnotherTabClicked) {
                    el.classList.remove("tab_active");
                }
            });
        });
        
        const secondPanelExceptJournals = this.querySelectorAll('.second-panel__tab:not(#journals_tab)');
        const journals = this.querySelector("#journals_tab");
        const tab = this.querySelector(".journals");
        tab.classList.add("visible");

        Array.from(secondPanelExceptJournals).forEach(tab1 => tab1.onclick = () => {
            tab.classList.remove("visible");
        });
        journals.onclick = () => {
            tab.classList.add("visible");
        }

        const moreTab = this.querySelector(".third-panel__tab.more");
        moreTab.onclick = () => {
            const otherTabs = this.querySelector(".other-tabs");
            if (otherTabs.classList.contains("other-tabs_active")) {
                otherTabs.classList.remove("other-tabs_active");
                moreTab.querySelector("p").querySelector("span.icon").classList.add("reversed");
            } else {
                otherTabs.classList.add("other-tabs_active");
                moreTab.querySelector("p").querySelector("span.icon").classList.remove("reversed");
            }
        };

        this.querySelectorAll(".third-panel__tab:not(.more)").forEach((el, index) => {
            el.onclick = event => {
                this.querySelectorAll(".third-panel__tab").forEach(el => {
                    el.classList.remove("third-panel__tab_active");
                });
                el.classList.add("third-panel__tab_active");
            };
            if (index == 8) {
                el.classList.add("third-panel__tab_active");
            }
        });
        document.querySelector(".icon.burger").onclick = () => {
            const menu = document.querySelector("#navbar");
            if (menu.classList.contains("mobile-menu-wrapper_active")) {
                menu.classList.remove("mobile-menu-wrapper_active");
            } else {
                menu.classList.add("mobile-menu-wrapper_active");
            }
        };
        window.addEventListener("resize", () => {
            const menu = document.querySelector("#navbar");
            if (window.innerWidth <= 640) {
                menu.classList.remove("mobile-menu-wrapper_active");
            } else if (window.innerWidth >= 880) {
                menu.classList.add("mobile-menu-wrapper_active");
            }
        });
        window.onbeforeunload = () => sessionStorage.setItem('scrollPos', window.scrollY);
        window.onload = () => window.scrollTo(0, sessionStorage.getItem('scrollPos') || 0);
    }
}

customElements.define("navbar-elem", Navbar);
