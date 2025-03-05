async function uploadImage() {
    const fileInput = document.getElementById("imageUpload");
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an image file.");
        return;
    }

    document.getElementById("status-message").innerText = "Processing... Please wait.";

    const formData = new FormData();
    formData.append("image", file);

    try {
        const response = await fetch("http://127.0.0.1:5000/api/upload", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            document.getElementById("message").innerText = data.message;
        } else {
            document.getElementById("message").innerText = "❌ No match found.";
        }
    } catch (error) {
        console.error("❌ Error uploading image:", error);
        document.getElementById("message").innerText = "❌ Error uploading image.";
    } finally {
        document.getElementById("status-message").innerText = "";
    }
}
