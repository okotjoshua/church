$(document).ready(function() {
    "use strict";
    function e() {
        if ($(window).width() >= 480) {
            var e = $(".holder .blog-holder:nth-of-type(2)").outerHeight();
            $(".holder .blog-holder:nth-of-type(1) .imageholder-blog").css("height", e)
        }
    }
    function t() {
        if ($(window).width() >= 480) {
            var e = $(".event-other .counter-wrap .figcaption").outerHeight();
            $(".event-other .counter-wrap .figure").css("height", e)
        }
    }
    function n() {
        if ($(window).width() >= 768) {
            var e = $("section.event .left-fig").outerHeight();
            $("section.event .right-fig").css("height", e)
        }
    }
    function o() {
        $(window).width() <= 992 && $(".dropdown").on("click", function() {
            $(".menu-bar li .submenu").toggleClass("add-submenu")
        })
    }
    function a() {
        $(".event").waypoint(function() {
            setTimeout(function() {
                $(".event").addClass("animated flipInX")
            }, 100)
        }, {
            offset: "70%"
        }),
        $(".s-header .button-wrapper").waypoint(function() {
            setTimeout(function() {
                $(".btn-content").addClass("animated fadeInUp")
            }, 100)
        }, {
            offset: "70%"
        }),
        $(".about").waypoint(function() {
            setTimeout(function() {
                $("section.about .figure:nth-of-type(1)").addClass("animated fadeInLeft"),
                $("section.about .figure:nth-of-type(2)").addClass("animated fadeInUp"),
                $("section.about .figure:nth-of-type(3)").addClass("animated fadeInRight")
            }, 100)
        }, {
            offset: "70%"
        }),
        $(".upcoming-event").waypoint(function() {
            setTimeout(function() {
                $("section.upcoming-event .figure .item-fig ").addClass("animated fadeInDown"),
                $("section.upcoming-event .figure .item-content ").addClass("animated fadeInUp")
            }, 100)
        }, {
            offset: "70%"
        }),
        $("header").waypoint(function() {
            setTimeout(function() {
                $("section.aboutus .figure .figcaption").addClass("animated fadeInRight"),
                $("section.aboutus .figure .fig").addClass("animated fadeInLeft")
            }, 100)
        }, {
            offset: "70%"
        }),
        $("section.quotation").waypoint(function() {
            setTimeout(function() {
                $("section.quotation h5").addClass("animated fadeInUp"),
                $("section.quotation p").addClass("animated fadeInUp")
            }, 100)
        }, {
            offset: "70%"
        }),
        $("section.staff").waypoint(function() {
            setTimeout(function() {
                $("section.staff .figure:nth-of-type(1)").addClass("animated fadeInLeft"),
                $("section.staff .figure:nth-of-type(2)").addClass("animated fadeInDown"),
                $("section.staff .figure:nth-of-type(3)").addClass("animated fadeInRight")
            }, 100)
        }, {
            offset: "70%"
        })
    }
    function i() {
        var e = parseInt(window.getComputedStyle(m).width, 10)
          , t = e * w;
        v.style.width = e + "px",
        v.style.height = t + "px",
        v.style.marginTop = "-3.278%",
        m.style.height = .88 * t + "px"
    }
    function s() {
        T.html(b.getMonthName()),
        C.html(b.getYear())
    }
    function r() {
        S.empty(),
        $.each(g, function(e, t) {
            var n = parseInt(e.substring(0, 2))
              , o = parseInt(e.substring(3, 5));
            if (n === b.getMonth())
                for (var a = 0; a < t.length; a++)
                    S.append('<li class="eventday-' + o + '">' + t[a].content + "</li>");
            else
                S.html("There are no events in this month")
        })
    }
    $(".slider").slick({
        slidesToShow: 1,
        infinite: !0,
        slidesToScroll: 1,
        arrows: !1,
        dots: !0,
        autoplay: !0,
        autoplaySpeed: 3e3
    }),
    $(".event_slide").slick({
        slidesToShow: 1,
        infinite: !0,
        slidesToScroll: 1,
        arrows: !0,
        dots: !1,
        autoplay: !1,
        autoplaySpeed: 3e3
    }),
    $(".gallery-wrapper ").slick({
        slidesToShow: 8,
        infinite: !0,
        slidesToScroll: 1,
        autoplay: !0,
        arrows: !1,
        autoplaySpeed: 2e3,
        responsive: [{
            breakpoint: 2e3,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: !0,
                dots: !1
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    for (var l = $(".slide-show").length, d = 0; l > d; d++) {
        var c = "slide-show" + d
          , p = "prev-slide" + d
          , h = "next-btn" + d;
        $(".slide-show").eq(d).attr("id", c),
        $(".prev-slide").eq(d).attr("id", p),
        $(".next-slide").eq(d).attr("id", h);
        var f = "#" + p
          , u = "#" + h;
        $("#" + c).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            autoplay: !0,
            autoplaySpeed: 5e3,
            prevArrow: f,
            nextArrow: u
        })
    }
    if ($(".slider-donation").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn"
    }),
    $(".navbar-toggle").on("click", function() {
        var e = $(window).height();
        $(".wrapper-body").css("max-height", e),
        $(".navbar").find(".nav-menu").addClass("open"),
        $(".overlay").addClass("overlay-open")
    }),
    $(".close").on("click", function() {
        $(".wrapper-body").css("max-height", "inherit"),
        $(".navbar").find(".nav-menu").removeClass("open"),
        $(".overlay").removeClass("overlay-open"),
        $(".search-box-top").removeClass("open-search")
    }),
    $(".open-register").on("click", function() {
        var e = $(window).height();
        $(".wrapper-body").css("max-height", e),
        $(".overlay-event ").addClass("event-open")
    }),
    $(".close-event").on("click", function() {
        $(".wrapper-body").css("max-height", "inherit"),
        $(".overlay-event ").removeClass("event-open")
    }),
    $("a.zoom").prettyPhoto(),
    $(".search-box-tablet").on("click", function() {
        $(".search-box-top").toggleClass("open-search")
    }),
    function(e) {
        function t(t, n) {
            this.$element = e(t),
            this.date = n,
            this.init()
        }
        t.prototype.init = function() {
            var t = this;
            setInterval(function() {
                var n = t.time_difference();
                e(".days .count").text(n.days),
                e(".hours .count").text(n.hours),
                e(".minutes .count").text(n.minutes),
                e(".seconds .count").text(n.seconds)
            }, 1e3)
        }
        ,
        t.prototype.time_difference = function() {
            var e, t, n, o, a, i = 6e4, s = 60 * i, r = 24 * s, l = new Date;
            return n = l > this.date ? l - this.date.getTime() : this.date.getTime() - l,
            e = Math.floor(n / r),
            n -= e * r,
            t = Math.floor(n / s),
            n -= t * s,
            o = Math.floor(n / i),
            n -= o * i,
            a = Math.floor(n / 1e3),
            {
                days: e,
                hours: t,
                minutes: o,
                seconds: a
            }
        }
        ,
        e.fn.countdown = function(n, o) {
            this.each(function() {
                var a = e(this);
                a.data("js-countdown") || a.data("js-countdown", new t(this,n,o))
            })
        }
    }(jQuery),
    $(".js-countdown").countdown(new Date(2023,4,21,24,0,0)),
    $(window).on("scroll", function() {
        var e = $(".header-top").height();
        $(window).scrollTop() > e ? ($(".menu").addClass("menu-fixed"),
        $(".button-wrapper").addClass("top-content")) : ($(".menu").removeClass("menu-fixed"),
        $(".button-wrapper").removeClass("top-content"))
    }),
    e(),
    t(),
    n(),
    o(),
    $(window).on("resize", function() {
        o(),
        t(),
        e(),
        n()
    }),
    $(window).on("resize", function() {
        $(window).width() >= 992 && a()
    }),
    $(window).width() >= 992 && a(),
    $("#list-item").length) {
        $(".menu-wrapper a").on("click", function() {
            var e = $(this);
            e.parents(".menu-wrapper").find("a").removeClass("selected"),
            e.addClass("selected")
        });
        var y = $("#list-item");
        y.isotope({
            itemSelector: ".figure",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }),
        $(".menu-wrapper  li a").on("click", function(e) {
            e.preventDefault();
            var t = $(this).attr("data-filter");
            y.isotope({
                filter: t
            })
        })
    }
    $(".page_overlay").addClass("animated fadeOut"),
    setTimeout(function() {
        $(".page_overlay").hide()
    }, 500),
    $.fn.scrollTo = function(e) {
        var t = {
            offset: 70,
            speed: "slow",
            override: null,
            easing: null
        };
        return e && (e.override && (e.override = -1 !== override("#") ? e.override : "#" + e.override),
        $.extend(t, e)),
        this.each(function(e, n) {
            $(n).on("click", function(e) {
                var o;
                null !== $(n).attr("href").match(/#/) && (e.preventDefault(),
                o = t.override ? t.override : $(n).attr("href"),
                history.pushState ? (history.pushState(null, null, o),
                $("html,body").stop().animate({
                    scrollTop: $(o).offset().top + t.offset
                }, t.speed, t.easing)) : $("html,body").stop().animate({
                    scrollTop: $(o).offset().top + t.offset
                }, t.speed, t.easing, function(e) {}))
            })
        })
    }
    ,
    $(".GoToHome, .GoToAbout, .GoToSermons, .GoToGallery, .GoToBlog, .GoToEvent, .GoToStore, .GoToContact").scrollTo({
        speed: 1400
    });
    var m = document.getElementById("embed_container")
      , v = document.getElementById("video")
      , w = 9 / 16;
    if ($("#embed_container").length && (i(),
    window.addEventListener("resize", i, !1)),
    $('[data-spy="scroll"]').each(function() {
        $(this).scrollspy("refresh")
    }),
    $(".tab_eventSection a").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        "#" === t || ($(".tab_eventSection li").removeClass("active"),
        $(this).parent().addClass("active"),
        $(".event_montlydetails .tab-pane").hide(),
        $(t).show())
    }),
    $("#calendar").length) {
        var g = {
            "09-16-2015": [{
                content: "<span>John Applesed's Birthday</span>",
                allDay: !0
            }, {
                content: "<span>Arnold Mathew's Birthday</span>",
                allDay: !0
            }, {
                content: "<span>Captain X's Birthday</span>",
                allDay: !0
            }],
            "09-17-2015": [{
                content: "<span>John Applesed's Birthday</span>",
                allDay: !0
            }, {
                content: "<span>Arnold Mathew's Birthday</span>",
                allDay: !0
            }, {
                content: "<span>Captain X's Birthday</span>",
                allDay: !0
            }],
            "09-18-2015": [{
                content: "<span>John Applesed's Birthday</span>",
                allDay: !0
            }, {
                content: "<span>Arnold Mathew's Birthday</span>",
                allDay: !0
            }, {
                content: "<span>Captain X's Birthday</span>",
                allDay: !0
            }],
            "09-19-2015": [{
                content: "<span>John Applesed's Birthday</span>",
                allDay: !0
            }, {
                content: "<span>Arnold Mathew's Birthday</span>",
                allDay: !0
            }, {
                content: "<span>Captain X's Birthday</span>",
                allDay: !0
            }],
            "09-29-2015": [{
                content: "<span>Birthday</span>",
                allDay: !0
            }, {
                content: "<span>Birthday</span>",
                allDay: !0
            }, {
                content: "<span>Captain X's Birthday</span>",
                allDay: !0
            }]
        }
          , b = $("#calendar").calendario({
            displayWeekAbbr: !0,
            caldata: g,
            events: "mouseenter, mouseleave",
            onDayMouseenter: function(e, t, n) {
                var o = $(".eventday-" + n.day)
                  , a = $(".events-name");
                o.addClass("animated"),
                o.position() && (o.position().top < a.scrollTop() ? a.animate({
                    scrollTop: o.position().top
                }, 1e3) : o.position().top + o.height() > a.scrollTop() + a.innerHeight() && a.animate({
                    scrollTop: o.position().top - a.innerHeight() + o.height() + 15
                }, 1e3))
            },
            onDayMouseleave: function(e, t, n) {
                $(".eventday-" + n.day).removeClass("animated")
            }
        })
          , T = $("#current_month").html(b.getMonthName())
          , C = $("#current_yr").html(b.getYear());
        $("#next_yr").on("click", function() {
            b.gotoNextMonth(s),
            r()
        }),
        $("#prev_yr").on("click", function() {
            b.gotoPreviousMonth(s),
            r()
        });
        var S = $(".dynamic-event");
        r()
    }
    $(".scrollbar").length && $(".scrollbar").slimScroll({
        alwaysVisible: !1,
        railVisible: !1,
        size: "0px"
    })
});
