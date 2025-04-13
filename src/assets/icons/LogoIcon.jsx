import * as React from "react";
import { useEffect, useRef, useState } from "react";

const SvgComponent = ({ className = "", ...props }) => {
    const ref = useRef(null);
    const [bgColor, setBgColor] = useState(undefined); // valor por defecto

    useEffect(() => {
        if (ref.current) {
            const computedStyle = getComputedStyle(ref.current);
            const background = computedStyle.backgroundColor;

            // Si es transparente, seteamos null para no dibujar fondo
            if (background === "rgba(0, 0, 0, 0)") {
                setBgColor(null);
            } else {
                setBgColor(background);
            }
        }
    }, []);

    return (
        <div className={className} ref={ref}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 512 512"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                className={className}
                {...props}
            >
                {/* Background */}
                {bgColor && (
                    <path
                        d="M0 0h512v512H0z"
                        style={{
                            fill: bgColor,
                            fillOpacity: 1,
                            strokeWidth: 8.759,
                        }}
                    />
                )}
                <g
                    style={{
                        display: "inline",
                    }}
                >
                    <g
                        style={{
                            display: "inline",
                            fill: "currentColor",
                            fillOpacity: 1,
                        }}
                    >
                        <path
                            d="M5020 8154c-119-23-282-101-1961-940-1003-501-1782-896-1802-914-48-42-72-105-62-167 12-83 57-116 411-295 668-338 1653-837 1929-978 750-383 1356-683 1420-703 52-16 95-22 170-22 129 0 178 17 439 150 111 56 404 205 651 330 758 383 920 467 933 483 6 9 12 29 12 45 0 27-11 34-377 214-208 102-601 293-873 425-694 337-861 422-889 452-16 17-25 41-29 75-4 47-2 53 32 87 35 35 39 36 94 32 67-5 98-19 1387-656 468-230 871-428 898-440l47-21v-503l-1-503-44-28c-47-30-91-86-116-147-9-22-14-70-14-130 1-107 21-163 82-227 18-20 33-43 33-52 0-17-34-227-125-783-30-185-55-353-55-373 0-24 8-43 24-60 52-51 236-81 451-71 198 8 317 44 330 99 4 13-37 287-90 610l-96 587 30 26c45 38 90 137 97 215 12 122-45 244-143 309l-53 34v1075l163 85c89 46 356 183 592 304 458 233 514 269 530 341 13 60-3 116-46 165-38 43-159 105-1826 936-982 489-1815 899-1851 911-66 21-242 34-302 23z"
                            style={{
                                fill: "currentColor",
                                fillOpacity: 1,
                            }}
                            transform="matrix(.04496 0 0 -.04496 25.758 494.064)"
                        />
                        <path
                            d="M2562 4354c4-742 2-706 58-856 54-146 213-327 390-447 108-73 368-202 513-256 271-99 633-179 1009-222 218-25 801-25 1013 1 657 77 1195 272 1530 553l70 59 3 792 2 792-842-420c-926-462-940-468-1128-477-122-6-220 6-340 44-57 18-448 208-1175 572l-1098 549c-4 2-6-306-5-684z"
                            style={{
                                fill: "currentColor",
                                fillOpacity: 1,
                            }}
                            transform="matrix(.04496 0 0 -.04496 25.758 494.064)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};
export default SvgComponent;
