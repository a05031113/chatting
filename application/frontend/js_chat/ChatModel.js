import view from "./ChatView.js";

let model = {
    logout: async function logout(){
        try{
            let response = await fetch("/logout", {
                method: "DELETE"
            });
            let result = await response.json();
            if (response.status===200){
                localStorage.removeItem("headPhoto")
                window.location.href = "/";
            }else{
                return false;
            }
        }catch(error){
            console.log({"error": error});
        }
    },
    refresh: async function refresh(){
        try{
            const response = await fetch("/refresh", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            let result = await response.json();
            if (response.status === 200){
                loading.style.display = "none"
                return true;
            }else{
                window.location.href = "/";
            }
        }catch(error){
            console.log({"error": error})
        }
    },
    getHeadPhoto: function getHeadPhoto(){
        const photoUrl = localStorage.getItem("headPhoto");
        if (photoUrl.length > 50){
            view.headPhotoFresh(photoUrl);
        }
    },
    updateProfilePhoto: async function updateProfilePhoto(file){
        const response = await fetch("/api/user/upload-url", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const result = await response.json();
        const url = result.accessUrl.url;
        const photoUrl = result.photoUrl;
        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: file
        })
        localStorage.setItem("headPhoto", photoUrl);
        location.reload();
    }
}
export default model;