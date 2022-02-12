document.getElementById("nav").className = "navbar navbar-expand-lg navbar-light bg-light fixed-top";
document.getElementById("nav").innerHTML = `
<div class="container-fluid unselectable">
    <a class="navbar-brand" href="https://pj-sekai-databook.github.io/">プロセカDataBook</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="https://pj-sekai-databook.github.io/">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Contents
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <a class="dropdown-item" href="https://pj-sekai-databook.github.io/musics/">楽曲一覧</a>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li>
                        <a class="dropdown-item" href="https://pj-sekai-databook.github.io/posts/">公式動画/画像集</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Official
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <a class="dropdown-item" href="https://pjsekai.sega.jp/">公式サイト</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="https://twitter.com/pj_sekai">公式Twitter</a>
                    </li>
                    <li>
                        <a class="dropdown-item"
                            href="https://www.youtube.com/channel/UCdMGYXL38w6htx6Yf9YJa-w">公式YouTube</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
`