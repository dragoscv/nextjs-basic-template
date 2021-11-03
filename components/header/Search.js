import { useRouter } from "next/router";
import { headerContent } from "../../translations/headerContent";
import TextField from '@mui/material/TextField';
import { useTheme } from 'next-themes'
import { alpha, styled } from '@mui/material/styles';

const SearchField = styled('input')`
width: 100%;
font-size: 1rem;
font-family: IBM Plex Sans, sans-serif;
font-weight: 400;
line-height: 1.4375em;
background: rgb(243, 246, 249);
border: 1px solid #e5e8ec;
border-radius: 10px;
padding: 6px 10px;
color: #20262d;
transition: width 300ms ease;

&:hover {
  background: #eaeef3;
  border-color: #e5e8ec;
}

&:focus {
  outline: none;
  transition: width 200ms ease-out;
}
`;

const Search = () => {
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { content } = headerContent[locale];
    const { theme, setTheme } = useTheme()

    return (
        <>

            <SearchField placeholder={content.textSearch} id="custom-css-outlined-input-dark" />

        </>
    )
}

export default Search