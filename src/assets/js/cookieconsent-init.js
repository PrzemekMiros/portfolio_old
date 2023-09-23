// obtain cookieconsent plugin
var cc = initCookieConsent();

// microsoft logo
var logo = 'Cookies';
var cookie = '🍪';

// run plugin with config object
cc.run({
    current_lang : 'pl',
    autoclear_cookies : true,                   // default: false
    cookie_name: 'cc_cookie_demo1',             // default: 'cc_cookie'
    cookie_expiration : 365,                    // default: 182
    page_scripts: true,                         // default: false

    // auto_language: null,                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // force_consent: false,
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: "/",                        // default: root
    // cookie_same_site: "Lax",
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'cloud',                      // box,cloud,bar
            position: 'bottom center',             // bottom,middle,top + left,right,center
            transition: 'slide'                 // zoom,slide
        },
        settings_modal: {
            layout: 'box',                      // box,bar
            // position: 'left',                // right,left (available only if bar layout selected)
            transition: 'slide'                 // zoom,slide
        }
    },

    onFirstAction: function(){
        console.log('onFirstAction fired');
    },

    onAccept: function (cookie) {
        console.log('onAccept fired ...');
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired ...');
    },

    languages: {
        'en': {
            consent_modal: {
                title: cookie + ' Ta strona używa pliki cookie ',
                description: 'Ta strona używa niezbędnych plików cookie, aby zapewnić jej prawidłowe działanie. Ustawienia zostaną aktywowane dopiero po wyrażeniu zgody. <button type="button" data-cc="c-settings" class="cc-link">Pozwól mi wybrać</button>',
                primary_btn: {
                    text: 'Akceptuj',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Odrzuć',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: logo,
                save_settings_btn: 'Zapisz ustawienia',
                accept_all_btn: 'Akceptuj',
                reject_all_btn: 'Odrzuć',
                close_btn_label: 'Zamknij',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Wykorzystanie plików cookie 📢',
                        description: 'Używam plików cookie, aby zapewnić podstawowe funkcje witryny i poprawić Twoje doświadczenia użytkowania. Możesz wybrać dla każdej kategorii, aby w dowolnym momencie wyrazić zgodę.'
                    }, {
                        title: 'Niezbędne pliki cookie',
                        description: 'Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony internetowej. Bez tych plików cookie strona nie działałaby poprawnie',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Wydajnościowe i analityczne pliki cookie',
                        description: 'Te pliki cookie umożliwiają witrynie zapamiętanie wyborów dokonanych w przeszłości',
                        toggle: {
                            value: 'analytics',     // there are no default categories => you specify them
                            enabled: true,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'Reklamowe i targetujące pliki cookie',
                        description: 'Te pliki cookie zbierają informacje o tym, w jaki sposób korzystasz z witryny, które strony odwiedziłeś i które linki kliknąłeś. Wszystkie dane są anonimowe i nie mogą służyć do identyfikacji użytkownika',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Więcej informacji',
                        description: 'W przypadku jakichkolwiek pytań dotyczących mojej polityki dotyczącej plików cookie i Twoich wyborów, proszę <a class="cc-link" href="mailto:kontakt@futurewebstudio.pl"> skontaktuj się</a>.',
                    }
                ]
            }
        }
    }

});
