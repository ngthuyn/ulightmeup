from rembg import remove
from PIL import Image

input_path = "lighT_pro5_.jpg"
output_path = "lighT_pro5_.png"

img = Image.open(input_path)

result = remove(img)

result.save(output_path)

print("Done!")