(function () {
    const depth = Number(document.currentScript.getAttribute("data-depth"));
    let base_url = "https://pj-sekai-databook.github.io";
    if (depth > 1) {
        base_url = depth > 1 ? ".." + "/..".repeat(depth - 2) : ".";
    }
    document.getElementById("nav").className = "navbar navbar-expand-lg navbar-light bg-light fixed-top";
    document.getElementById("nav").innerHTML = `
        <div class="container-fluid unselectable">
            <a class="navbar-brand" href="${base_url}/">プロセカDataBook</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="${base_url}/">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <div class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Contents
                        </div>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item" href="${base_url}/musics/">楽曲一覧</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="${base_url}/posts/">公式動画/画像集</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="${base_url}/statistics/">統計/ランキング集</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item" href="${base_url}/prsk_yt_bot/">YouTube再生数bot</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <div class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Official
                        </div>
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
        </div>`;
})();