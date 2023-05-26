# `Task - 01`

## The Text color of Title changed from "hsl(212, 21%, 14%);" to "B4161B".

### **Before applying Code:**
![](./ass9.1-before.png)

### Task-01 - Solution:
```
let textColorChange = document.querySelector(".caption > .title");
    textColorChange.style.color = "#B4161B";
```

### After applying Code:
![](./ass9.1-after.png)


# `Task - 02`

## The Background color of "add to cart" button changed to 

- When Mouse Enter - "#B4161B".
- When Mouse Leaves - "hsl(157, 37%, 20%)".


### Before applying Code:
![](./ass9.2-before.png)


### After applying Code:
![](./ass9.2-after.png)

### Task-02 - Solution : 
```
let addToCartBackgroundColorChange = document.querySelector(".add-to-cart");

addToCartBackgroundColorChange.addEventListener("mouseenter", (e) => {
    addToCartBackgroundColorChange.style.backgroundColor = "#B4161B";
  });
  
  addToCartBackgroundColorChange.addEventListener("mouseleave", (e) => {
    addToCartBackgroundColorChange.style.backgroundColor = "hsl(157, 37%, 20%)";
  });
``` 