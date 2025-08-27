import {__esmMin as e} from "./rolldown-runtime.mo4u6EdQ.mjs";
import {Z as t, fe as n, init_jsx_runtime as r, init_npm_react_18_2 as i, init_ssg_sandbox_shims as a, j as o, p as s, pe as c, q as l, te as u, u as d, ue as f, window as p, ye as ee} from "./react.DRTl4Yah.mjs";
import {animate as m, init_framer_motion_5EXT2AMG as h, motion as g, useMotionValue as _, useReducedMotion as te, useTransform as v} from "./motion.CIwiHFcG.mjs";
import {ControlType as y, RenderTarget as ne, addPropertyControls as b, init_framer_PZCE2HD7 as re} from "./framer.OCGXU4pV.mjs";
import {init_index_es as ie, resize as ae, scroll as x} from "./index.es.BxKhIBlt.mjs";
import {init_colorFromToken as S, init_constants as C, init_isBrowser as oe, init_isMotionValue as w, init_propUtils as T, init_useAutoMotionValue as E, init_useConstant as D, init_useControlledState as O, init_useFontControls as k, init_useOnChange as A, init_useOnNavigationTargetChange as j, init_useRenderTarget as se, init_useUniqueClassName as M, init_variantUtils as ce, paddingControl as N, usePadding as le} from "./propUtils.BfgoR7cz.mjs";
var ue, P = e(( () => {
    ue = (e, t, n) => Math.min(Math.max(n, e), t)
}
)), de = e(( () => {
    C(),
    j(),
    D(),
    S(),
    w(),
    M(),
    ce(),
    oe(),
    A(),
    E(),
    k(),
    se(),
    O(),
    T()
}
));
function fe([e,t]) {
    return e + (100 - e) * (t / 100) * .5
}
function pe() {
    let[e,r] = ee(!1);
    return n( () => {
        t( () => r(p.matchMedia(`(pointer:fine)`).matches))
    }
    , []),
    e
}
function F(e, t, {edgeOpacity: n, moreItems: r, buttonRef: i}, a) {
    r.current && e === t ? (r.current = !1,
    m(n, 1, a),
    i.current.setAttribute(`disabled`, ``)) : !r.current && e !== t && (r.current = !0,
    m(n, 0, a),
    i.current.removeAttribute(`disabled`))
}
function me(e, t) {
    let n = c(e)
      , r = _(n.current ? 0 : 1)
      , i = v(r, [0, 1], [t || 0, 1])
      , a = v(r, e => 1 - e)
      , o = c(null)
      , s = v(a, e => e > .2 ? `auto` : `none`)
      , l = v(s, e => e === `auto` ? `pointer` : `default`)
      , u = {
        ...V,
        opacity: a,
        pointerEvents: s,
        cursor: l
    };
    return {
        moreItems: n,
        fadeOpacity: i,
        edgeOpacity: r,
        buttonStyle: u,
        buttonRef: o
    }
}
function he({element: e}) {
    e.setAttribute(`aria-hidden`, !1)
}
function ge(e, t, n, r, i, a, o) {
    f( () => {
        if (!e.current)
            return;
        let s = e => {
            n.current = e[t],
            e[t].current === i.current && (i.current = void 0),
            r(e[t].current),
            a()
        }
          , c = x(s, {
            container: e.current,
            axis: t
        })
          , l = ae(e.current, () => {
            o(),
            a()
        }
        );
        return () => {
            c(),
            l()
        }
    }
    , [a, o])
}
function I({slots: e, gap: n, axis: r, align: i, sizingObject: a, fadeObject: p, arrowObject: m, snapObject: h, progressObject: y, ariaLabel: b, borderRadius: re, effectsObject: ie, ...ae}) {
    let x = e.filter(Boolean)
      , S = o.count(x)
      , C = ne.current() === ne.canvas
      , oe = le(ae)
      , w = r ? `x` : `y`
      , {fadeContent: T, fadeWidth: E, fadeInset: D, fadeTransition: O, fadeAlpha: k} = p
      , {snap: A, snapEdge: j, fluid: se} = h
      , {widthType: M, widthInset: ce, widthColumns: N, heightType: P, heightInset: de, heightRows: I} = a
      , {showScrollbar: L, showProgressDots: R, dotSize: z, dotsInset: B, dotsRadius: Te, dotsPadding: Ee, dotsGap: De, dotsFill: Oe, dotsBackground: ke, dotsActiveOpacity: Ae, dotsOpacity: je, dotsBlur: Me} = y
      , {showMouseControls: H, arrowSize: U, arrowRadius: Ne, arrowFill: Pe, leftArrow: Fe, rightArrow: Ie, arrowPadding: Le} = m
      , W = c(void 0)
      , G = c(void 0)
      , K = _(0)
      , Re = e => {
        K.set(G.current === void 0 ? e : G.current)
    }
    ;
    pe();
    let q = me(!1, k)
      , J = me(!0, k)
      , Y = _(D * .5)
      , ze = v(Y, e => 100 - e)
      , Be = _(E)
      , Ve = v([Y, Be], fe)
      , He = v(Ve, e => 100 - e)
      , Ue = _(r ? `right` : `bottom`)
      , We = v([Ue, q.fadeOpacity, Y, Ve, J.fadeOpacity, ze, He], e => `linear-gradient(to ${e[0]}, rgb(0, 0, 0, ${e[1]}) ${e[2]}%, rgb(0, 0, 0, 1) ${e[3]}%, rgba(0, 0, 0, 1) ${e[6]}%, rgb(0, 0, 0, ${e[4]}) ${e[5]}%)`)
      , X = c(null)
      , [Z,Ge] = ee(C ? 4 : 1)
      , Q = {
        scrollSnapAlign: j,
        flexShrink: 0
    }
      , $ = {};
    i === `stretch` && (r ? ($.height = `100%`,
    Q.height = `auto`) : ($.width = `100%`,
    Q.width = `auto`)),
    se || (Q.scrollSnapStop = `always`),
    M === `stretch` ? (Q.width = `calc(100% - ${ce || 0}px)`,
    $.width = `100%`) : M === `columns` && (Q.width = `calc(${100 / N}% - ${n}px + ${n / N}px)`,
    $.width = `100%`),
    P === `stretch` ? (Q.height = `calc(100% - ${de || 0}px)`,
    $.height = `100%`) : P === `rows` && (Q.height = `calc(${100 / I}% - ${n}px + ${n / I}px)`,
    $.height = `100%`);
    let Ke = C ? `hidden` : `auto`
      , qe = {
        ...be,
        padding: oe
    }
      , Je = {
        ...xe,
        gap: n,
        alignItems: i,
        flexDirection: r ? `row` : `column`,
        overflowX: r ? Ke : `hidden`,
        overflowY: r ? `hidden` : Ke,
        scrollSnapType: A ? `${w} mandatory` : void 0,
        WebkitOverflowScrolling: `touch`,
        WebkitMaskImage: T ? We : void 0,
        maskImage: T ? We : void 0,
        borderRadius: re
    }
      , Ye = {
        "aria-roledescription": `carousel`
    };
    b && (Ye[`aria-title`] = b);
    let Xe = {};
    if (i === `stretch` && (Xe[`aria-role`] = `group`,
    Xe[`aria-roledescription`] = `slide`),
    !C) {
        let e = c([]);
        ge(X, w, W, Re, G, u( () => {
            if (!W.current)
                return;
            let {targetLength: t, containerLength: n, scrollLength: r} = W.current
              , i = K.get();
            if (!t && !n)
                return;
            if (t > n) {
                F(i, 0, q, O),
                F(i, r, J, O);
                for (let t = 0; t < e.current.length; t++) {
                    let {element: r, start: a, end: o} = e.current[t];
                    o < i || a > i + n ? r.setAttribute(`aria-hidden`, !0) : r.setAttribute(`aria-hidden`, !1)
                }
            } else
                F(0, 0, q, O),
                F(1, 1, J, O),
                e.current.forEach(he);
            let a = Math.ceil(t / n);
            isNaN(a) || (a / S > .65 && (a = S),
            a !== Z && Ge(a))
        }
        , [Z]), u( () => {
            X.current && (e.current = Array.from(X.current.children).map(e => r ? {
                element: e,
                start: e.offsetLeft,
                end: e.offsetLeft + e.offsetWidth
            } : {
                element: e,
                start: e.offsetTop,
                end: e.offsetTop + e.offsetHeight
            }))
        }
        , []))
    }
    C && (f( () => {
        Be.set(E)
    }
    , [E]),
    f( () => {
        Y.set(D * .5)
    }
    , [D]),
    f( () => {
        Ue.set(r ? `right` : `bottom`)
    }
    , [r]));
    let Ze = te()
      , Qe = e => {
        G.current = e;
        let t = r ? {
            left: e
        } : {
            top: e
        };
        X.current.scrollTo({
            ...t,
            behavior: Ze ? `auto` : `smooth`
        })
    }
      , $e = (e, t) => {
        if (!W.current)
            return;
        let {scrollLength: n} = W.current
          , r = n / (Z - 1);
        Qe(e * r + t * r)
    }
      , et = e => () => {
        if (!W.current)
            return;
        let {containerLength: t, scrollLength: n} = W.current
          , r = K.get()
          , i = n / Z
          , a = ue(0, Z - 1, Math.floor(r / i))
          , o = 0;
        A && (j === `start` || j === `end`) && e >= 1 && (o = .4),
        $e(a + e, o)
    }
    ;
    if (S === 0)
        return s(ve, {});
    let tt = []
      , nt = {};
    if (Z > 1 && R && !L) {
        for (let e = 0; e < Z; e++) {
            let n = C && !e || !1;
            tt.push(s(_e, {
                dotStyle: {
                    ...we,
                    width: z,
                    height: z,
                    backgroundColor: Oe
                },
                buttonStyle: V,
                isSelected: n,
                selectedOpacity: Ae,
                opacity: je,
                onClick: () => t( () => $e(e)),
                currentScroll: K,
                scrollInfo: W,
                total: Z,
                index: e,
                gap: De,
                padding: Ee,
                axis: r
            }))
        }
        Me && (nt.backdropFilter = nt.WebkitBackdropFilter = `blur(${Me}px)`)
    }
    return d(`section`, {
        style: qe,
        ...Ye,
        children: [s(g.ul, {
            ref: X,
            style: Je,
            className: `framer--carousel`,
            "data-show-scrollbar": L,
            "aria-atomic": `false`,
            "aria-live": `polite`,
            onWheel: () => G.current = void 0,
            children: o.map(x, (e, t) => s(`li`, {
                style: Q,
                ...Xe,
                "aria-label": `${t + 1} of ${S}`,
                children: l(e, {
                    ...e.props,
                    style: {
                        ...e.props?.style,
                        ...$
                    }
                })
            }))
        }), d(`fieldset`, {
            style: {
                ...Se,
                padding: Le,
                display: `flex`,
                flexDirection: r ? `row` : `column`
            },
            "aria-label": `Carousel pagination controls`,
            className: `framer--carousel-controls`,
            "data-show-mouse-controls": H,
            children: [s(g.button, {
                ref: q.buttonRef,
                type: `button`,
                style: {
                    ...q.buttonStyle,
                    backgroundColor: Pe,
                    width: U,
                    height: U,
                    borderRadius: Ne,
                    rotate: r ? 0 : 90,
                    display: H ? `block` : `none`
                },
                onClick: et(-1),
                "aria-label": `Previous`,
                whileTap: {
                    scale: .9
                },
                transition: {
                    duration: .05
                },
                children: s(`img`, {
                    decoding: `async`,
                    alt: ``,
                    width: U,
                    height: U,
                    src: Fe || `https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`
                })
            }), s(g.button, {
                ref: J.buttonRef,
                type: `button`,
                style: {
                    ...J.buttonStyle,
                    backgroundColor: Pe,
                    width: U,
                    height: U,
                    borderRadius: Ne,
                    rotate: r ? 0 : 90,
                    display: H ? `block` : `none`
                },
                onClick: et(1),
                "aria-label": `Next`,
                whileTap: {
                    scale: .9
                },
                transition: {
                    duration: .05
                },
                children: s(`img`, {
                    decoding: `async`,
                    alt: ``,
                    width: U,
                    height: U,
                    src: Ie || `https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`
                })
            }), tt.length > 1 ? s(`div`, {
                style: {
                    ...Ce,
                    left: r ? `50%` : B,
                    top: r ? `unset` : `50%`,
                    transform: r ? `translateX(-50%)` : `translateY(-50%)`,
                    flexDirection: r ? `row` : `column`,
                    bottom: r ? B : `unset`,
                    borderRadius: Te,
                    backgroundColor: ke,
                    ...nt
                },
                children: tt
            }) : null]
        }), s(ye, {})]
    })
}
function _e({currentScroll: e, scrollInfo: t, isSelected: n, selectedOpacity: r, opacity: i, total: a, index: o, dotStyle: c, buttonStyle: l, gap: u, padding: d, axis: f, ...p}) {
    let ee = v(e, e => {
        if (!t.current?.scrollLength)
            return o === 0 ? r : i;
        let n = t.current?.scrollLength / a
          , s = n * o
          , c = s + n
          , l = e >= s && (o < a - 1 ? e < c : o === a - 1);
        return l ? r : i
    }
    )
      , m = u / 2
      , h = !f && o > 0 ? m : d
      , _ = !f && o !== a - 1 ? m : d
      , te = f && o !== a - 1 ? m : d
      , y = f && o > 0 ? m : d;
    return s(`button`, {
        "aria-label": `Scroll to page ${o + 1}`,
        type: `button`,
        ...p,
        style: {
            ...l,
            padding: `${h}px ${te}px ${_}px ${y}px`
        },
        children: s(g.div, {
            style: {
                ...c,
                opacity: ee
            }
        })
    })
}
function ve() {
    return d(`section`, {
        style: L,
        children: [s(`div`, {
            style: R,
            children: `✨`
        }), s(`p`, {
            style: z,
            children: `Connect to Content`
        }), s(`p`, {
            style: B,
            children: `Add layers or components to swipe between.`
        })]
    })
}
function ye() {
    return s(`div`, {
        dangerouslySetInnerHTML: {
            __html: `<style>@media (pointer: fine) {
                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar {
                    display: none;
                    -webkit-appearance: none;
                    width: 0;
                    height: 0;
                }

                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar-thumb {
                    display: none;
                }

                .framer--carousel[data-show-scrollbar="false"] {
                    scrollbar-width: none;
                    scrollbar-height: none;
                }
            }</style>`
        }
    })
}
var L, R, z, B, be, xe, V, Se, Ce, we, Te = e(( () => {
    a(),
    r(),
    i(),
    re(),
    ie(),
    P(),
    h(),
    de(),
    I.defaultProps = {
        gap: 10,
        padding: 10,
        progressObject: {
            showScrollbar: !1,
            showProgressDots: !1
        },
        sizingObject: {
            widthType: `auto`,
            widthOffset: 0,
            widthColumns: 2,
            heightType: `auto`,
            heightOffset: 0,
            heightRows: 2
        },
        borderRadius: 0
    },
    b(I, {
        slots: {
            type: y.Array,
            title: `Children`,
            control: {
                type: y.ComponentInstance
            }
        },
        axis: {
            type: y.Enum,
            title: `Direction`,
            options: [!0, !1],
            optionIcons: [`direction-horizontal`, `direction-vertical`],
            displaySegmentedControl: !0
        },
        align: {
            type: y.Enum,
            title: `Align`,
            options: [`flex-start`, `center`, `flex-end`],
            optionIcons: {
                axis: {
                    true: [`align-top`, `align-middle`, `align-bottom`],
                    false: [`align-left`, `align-center`, `align-right`]
                }
            },
            defaultValue: `center`,
            displaySegmentedControl: !0
        },
        gap: {
            type: y.Number,
            title: `Gap`
        },
        ...N,
        sizingObject: {
            type: y.Object,
            title: `Sizing`,
            controls: {
                widthType: {
                    type: y.Enum,
                    title: `Width`,
                    options: [`auto`, `stretch`, `columns`],
                    optionTitles: [`Auto`, `Stretch`, `Columns`],
                    defaultValue: `auto`
                },
                widthInset: {
                    type: y.Number,
                    title: `Inset`,
                    min: 0,
                    max: 500,
                    defaultValue: 0,
                    hidden: e => e.widthType !== `stretch`
                },
                widthColumns: {
                    type: y.Number,
                    title: `Columns`,
                    min: 1,
                    max: 10,
                    defaultValue: 2,
                    displayStepper: !0,
                    hidden: e => e.widthType !== `columns`
                },
                heightType: {
                    type: y.Enum,
                    title: `Height`,
                    options: [`auto`, `stretch`, `rows`],
                    optionTitles: [`Auto`, `Stretch`, `Rows`],
                    defaultValue: `auto`
                },
                heightInset: {
                    type: y.Number,
                    title: `Inset`,
                    min: 0,
                    max: 500,
                    defaultValue: 0,
                    hidden: e => e.heightType !== `stretch`
                },
                heightRows: {
                    type: y.Number,
                    title: `Rows`,
                    min: 1,
                    max: 10,
                    defaultValue: 2,
                    displayStepper: !0,
                    hidden: e => e.heightType !== `rows`
                }
            }
        },
        snapObject: {
            type: y.Object,
            title: `Snapping`,
            controls: {
                snap: {
                    type: y.Boolean,
                    title: `Enable`
                },
                snapEdge: {
                    type: y.Enum,
                    title: `Edge`,
                    options: [`start`, `center`, `end`],
                    optionTitles: [`Left`, `Center`, `Right`],
                    defaultValue: `center`,
                    hidden: e => !e.snap
                },
                fluid: {
                    type: y.Boolean,
                    title: `Fluid`,
                    defaultValue: !1,
                    hidden: e => !e.snap
                }
            }
        },
        fadeObject: {
            type: y.Object,
            title: `Fading`,
            controls: {
                fadeContent: {
                    type: y.Boolean,
                    title: `Enable`,
                    defaultValue: !1
                },
                fadeWidth: {
                    type: y.Number,
                    title: `Width`,
                    defaultValue: 25,
                    min: 0,
                    max: 100,
                    unit: `%`,
                    hidden: e => !e.fadeContent
                },
                fadeInset: {
                    type: y.Number,
                    title: `Inset`,
                    defaultValue: 0,
                    min: 0,
                    max: 100,
                    unit: `%`,
                    hidden: e => !e.fadeContent
                },
                fadeAlpha: {
                    type: y.Number,
                    title: `Opacity`,
                    hidden: e => !e.fadeContent,
                    min: 0,
                    max: 1,
                    step: .05,
                    defaultValue: 0
                },
                fadeTransition: {
                    type: y.Transition,
                    title: `Transition`,
                    hidden: e => !e.fadeContent
                }
            }
        },
        progressObject: {
            type: y.Object,
            title: `Progress`,
            controls: {
                showScrollbar: {
                    type: y.Boolean,
                    title: `Scroll Bar`,
                    defaultValue: !1
                },
                showProgressDots: {
                    type: y.Boolean,
                    title: `Dots`,
                    defaultValue: !1,
                    hidden: e => e.showScrollbar
                },
                dotSize: {
                    type: y.Number,
                    title: `Size`,
                    min: 1,
                    max: 100,
                    defaultValue: 10,
                    displayStepper: !0,
                    hidden: e => !e.showProgressDots || e.showScrollbar
                },
                dotsInset: {
                    type: y.Number,
                    title: `Inset`,
                    min: 0,
                    max: 100,
                    defaultValue: 10,
                    displayStepper: !0,
                    hidden: e => !e.showProgressDots || e.showScrollbar
                },
                dotsGap: {
                    type: y.Number,
                    title: `Gap`,
                    min: 0,
                    max: 100,
                    defaultValue: 10,
                    displayStepper: !0,
                    hidden: e => !e.showProgressDots || e.showScrollbar
                },
                dotsPadding: {
                    type: y.Number,
                    title: `Padding`,
                    min: 0,
                    max: 100,
                    defaultValue: 10,
                    displayStepper: !0,
                    hidden: e => !e.showProgressDots || e.showScrollbar
                },
                dotsFill: {
                    type: y.Color,
                    title: `Fill`,
                    defaultValue: `#fff`,
                    hidden: e => !e.showProgressDots || e.showScrollbar
                },
                dotsBackground: {
                    type: y.Color,
                    title: `Backdrop`,
                    defaultValue: `rgba(0,0,0,0.2)`,
                    hidden: e => !e.showProgressDots || e.showScrollbar
                },
                dotsRadius: {
                    type: y.Number,
                    title: `Radius`,
                    min: 0,
                    max: 200,
                    defaultValue: 50,
                    hidden: e => !e.showProgressDots || e.showScrollbar
                },
                dotsOpacity: {
                    type: y.Number,
                    title: `Opacity`,
                    min: 0,
                    max: 1,
                    defaultValue: .5,
                    step: .1,
                    displayStepper: !0,
                    hidden: e => !e.showProgressDots || e.showScrollbar
                },
                dotsActiveOpacity: {
                    type: y.Number,
                    title: `Current`,
                    min: 0,
                    max: 1,
                    defaultValue: 1,
                    step: .1,
                    displayStepper: !0,
                    hidden: e => !e.showProgressDots || e.showScrollbar
                },
                dotsBlur: {
                    type: y.Number,
                    title: `Blur`,
                    min: 0,
                    max: 50,
                    defaultValue: 4,
                    step: 1,
                    hidden: e => !e.showProgressDots || e.showScrollbar
                }
            }
        },
        arrowObject: {
            type: y.Object,
            title: `Arrows`,
            controls: {
                showMouseControls: {
                    type: y.Boolean,
                    title: `Show`,
                    defaultValue: !0
                },
                arrowFill: {
                    type: y.Color,
                    title: `Fill`,
                    defaultValue: `rgba(0,0,0,0.2)`,
                    hidden: e => !e.showMouseControls
                },
                leftArrow: {
                    type: y.Image,
                    title: `Previous`,
                    hidden: e => !e.showMouseControls
                },
                rightArrow: {
                    type: y.Image,
                    title: `Next`,
                    hidden: e => !e.showMouseControls
                },
                arrowSize: {
                    type: y.Number,
                    title: `Size`,
                    min: 0,
                    max: 200,
                    displayStepper: !0,
                    defaultValue: 40,
                    hidden: e => !e.showMouseControls
                },
                arrowRadius: {
                    type: y.Number,
                    title: `Radius`,
                    min: 0,
                    max: 500,
                    defaultValue: 40,
                    hidden: e => !e.showMouseControls
                },
                arrowPadding: {
                    type: y.Number,
                    title: `Inset`,
                    min: 0,
                    max: 100,
                    defaultValue: 20,
                    displayStepper: !0,
                    hidden: e => !e.showMouseControls
                }
            }
        },
        ariaLabel: {
            type: y.String,
            title: `Aria Label`,
            placeholder: `Movies...`
        },
        borderRadius: {
            type: y.Number,
            title: `Radius`,
            min: 0,
            max: 500,
            displayStepper: !0,
            defaultValue: 0
        }
    }),
    L = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`
    },
    R = {
        fontSize: 32,
        marginBottom: 10
    },
    z = {
        margin: 0,
        marginBottom: 10,
        fontWeight: 600,
        textAlign: `center`
    },
    B = {
        margin: 0,
        opacity: .7,
        maxWidth: 130,
        lineHeight: 1.5,
        textAlign: `center`
    },
    be = {
        display: `flex`,
        overflow: `hidden`,
        width: `100%`,
        height: `100%`,
        position: `relative`
    },
    xe = {
        padding: 0,
        margin: 0,
        listStyle: `none`,
        position: `relative`,
        display: `flex`,
        flex: `1 1 100%`,
        width: `100%`,
        height: `100%`
    },
    V = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0
    },
    Se = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: `none`,
        border: 0,
        padding: 0,
        margin: 0
    },
    Ce = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`
    },
    we = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0
    }
}
));
export {I as Carousel, Te as init_Carousel};
//# sourceMappingURL=Carousel.Kqyu0Zs5.mjs.map
