(() => {
    let iframe = document.querySelector("iframe");
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        let blooks;
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        const lobby = window.location.pathname.startsWith("/play/lobby"),
            dashboard = !lobby && window.location.pathname.startsWith("/blooks");
        if (dashboard || lobby) {
            let blooks, key = lobby ? "keys" : "entries";
            const old = Object[key];
            Object[key] = function (obj) {
                if (!obj.Chick) return old.call(this, obj);
                blooks = obj;
                return (Object[key] = old).call(this, obj);
            };
            stateNode.render();
            if (lobby) stateNode.setState({ unlocks: Object.keys(blooks) });
            else stateNode.setState({ blookData: Object.keys(blooks).reduce((a, b) => (a[b] = (stateNode.state.blookData[b] || 1), a), {}), allSets: Object.values(blooks).reduce((a, b) => (b.set && a.includes(b.set) ? a : a.concat(b.set)), []) });
        } else alert("This only works in lobbies or the dashboard blooks page.");
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/005Konz/Blooket-Cheats/main/autoupdate/timestamps/global/useAnyBlook.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        let i = 0;
        while (i < data.length) {
            let char = String.fromCharCode(data[i % 4 == 3 ? (i++, i++) : i++] + data[i % 4 == 3 ? (i++, i++) : i++] * 256);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let _, time = 1716769994892, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) { }
        if (parseInt(time) <= 1716769994892 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)")
    }
})();
