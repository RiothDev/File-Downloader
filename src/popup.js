const getExt = (url) => {
    const ext = url.split('.').pop()
    const index = ext.indexOf('?')

    if(index !== -1) {
        return ext.substr(0, index)
    }

    return ext
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Download-Btn").addEventListener("click", (ev) => {
        ev.preventDefault()

        const url = document.getElementById("URL-Input").value

        if(url.trim() !== '') {
            chrome.downloads.download({
                url: url,
                filename: "file." + getExt(url),
                conflictAction: "uniquify",
                saveAs: true
            })
        } else {
            alert("Invalid URL")
        }
    })
})