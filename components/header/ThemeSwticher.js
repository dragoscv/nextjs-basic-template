import { useTheme } from 'next-themes'
import styled from "@emotion/styled";
import { useEffect } from "react"
import { useRouter } from "next/router";
import { headerContent } from '../../translations/headerContent';

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const inactiveTheme = theme === "light" ? "dark" : "light";
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { content } = headerContent[locale];

    const ToggleButton = styled.button`
  --toggle-width: 60px;
  --toggle-height: 25px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`;

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <>
            {/* <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            toggle
        </button> */}
            <ToggleButton
                aria-label={`Change to ${inactiveTheme} mode`}
                title={`Change to ${inactiveTheme} mode`}
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? <span>☀️</span> : <span>🌙</span>}
            </ToggleButton>
        </>
    )
}

export default ThemeSwitcher