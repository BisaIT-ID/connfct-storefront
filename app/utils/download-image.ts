async function downloadImage(src: string): Promise<void> {
  try {
    // Fetch the image from the source URL
    const response = await fetch(src);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    // Retrieve the image as a Blob
    const blob = await response.blob();

    // Create a local URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element and set its href to the URL
    const link = document.createElement("a");
    link.href = url;

    // Extract the filename from the URL or set a default
    const filename = src.split("/").pop() || "downloaded_image.png";
    link.download = filename;

    // Trigger a click event on the link to start the download
    document.body.appendChild(link);
    link.click();

    // Cleanup: remove the link element and revoke the object URL
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
}

export default downloadImage;
