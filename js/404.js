const svgContainer=document.getElementById("svg-container"),d='<svg height="24"viewBox="0 0 16.933333 16.933334"width="24"><defs id="defs2"/><path d="M 32 0 A 31.999998 31.999998 0 0 0 0 32 A 31.999998 31.999998 0 0 0 32 64 A 31.999998 31.999998 0 0 0 41.949219 62.396484 A 31.999998 31.999998 0 0 1 19.896484 32 A 31.999998 31.999998 0 0 1 41.970703 1.5957031 A 31.999998 31.999998 0 0 0 32 0 z "id="path31"style="fill:#bbb;fill-rule:evenodd"transform="scale(0.26458333)"/></svg>',l='<svg height="24"viewBox="0 0 16.933333 16.933334"width="24"><circle cx="8.4666662"cy="8.4666662"id="path404"r="4.7936082"style="fill:#777"/><path d="M 29 0 L 29 8.9863281 L 35 8.9863281 L 35 0 L 29 0 z M 29 55.013672 L 29 64 L 35 64 L 35 55.013672 L 29 55.013672 z "id="rect530"style="fill:#777"transform="scale(0.26458333)"/><path d="M 16.933333,7.6729165 H 14.5557 v 1.5875 h 2.377633 z m -14.5557009,0 H 1e-7 v 1.5875 h 2.377632 z"id="rect530-7"style="fill:#777"/><path d="m 13.892238,1.9185632 -1.68124,1.6812401 1.122532,1.122532 1.68124,-1.6812401 z M 3.599803,12.210998 1.9185633,13.892238 3.0410953,15.01477 4.722335,13.33353 Z"id="rect530-72"style="fill:#777"/><path d="m 15.01477,13.892238 -1.68124,-1.68124 -1.122532,1.122532 1.68124,1.68124 z M 4.722335,3.5998029 3.0410953,1.9185632 1.9185633,3.0410952 3.599803,4.7223349 Z"id="rect530-0"style="fill:#777"/></svg>';function a(){document.getElementById("toggle").checked?(svgContainer.innerHTML=d,document.body.classList.add("dark-mode"),localStorage.setItem("preference","1")):(svgContainer.innerHTML=l,document.body.classList.remove("dark-mode"),localStorage.setItem("preference","0"))}window.onload=function(e){document.getElementById("content").innerHTML="The requested URL "+window.location.href.replace("https://youtube4kdownloader.github.io","")+" was not found on this server.",null===localStorage.getItem("preference")&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?localStorage.setItem("preference","1"):localStorage.setItem("preference","0")),"0"===localStorage.getItem("preference")?svgContainer.innerHTML=l:(svgContainer.innerHTML=d,document.body.classList.add("dark-mode"),document.getElementById("toggle").checked=!0)};
