import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="Celebrate 2026 · Drive Time | UCLA Anderson",
    page_icon="🎙️",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Strip all Streamlit chrome so the page looks like a standalone site
st.markdown("""
<style>
#MainMenu, header, footer, .stDeployButton { display: none !important; }
.block-container { padding: 0 !important; max-width: 100% !important; }
section[data-testid="stSidebar"] { display: none !important; }
iframe { border: none !important; }
</style>
""", unsafe_allow_html=True)

with open("data.js")    as f: data_js = f.read()
with open("style.css")  as f: css     = f.read()
with open("index.html") as f: html    = f.read()

# Inline CSS and JS so the iframe is fully self-contained
html = html.replace('<link rel="stylesheet" href="style.css">', f'<style>{css}</style>')
html = html.replace('<script src="data.js"></script>', f'<script>{data_js}</script>')

components.html(html, height=8800, scrolling=False)
