<html>
<body>
<H1>Pizza Ordering Form</H1>
<form action="test">
<H2>Contact Information</H2>
Name: <input name=name><br>
Phone: <input name=phone><br>
Email: <input name=email><br>
<H2>Select Pizza Size</H2>
Pizza Size: 
<select name="size">
<option>Medium
<option>Large
<option>XLarge
</select><br>
<h2>Select Sauce</h2>
<input type="radio" name="sauce"> Marinara
<input type="radio" name="sauce"> Ranch
<input type="radio" name="sauce"> No Sauce
<h2>Select Toppings</h2>
<table>
<tr>
<td><input type="checkbox" name="toppings">Pepperoni </td>
<td><input type="checkbox" name="toppings">Sausage </td>
</tr>
<tr>
<td><input type="checkbox" name="toppings">Mushrooms </td>
<td><input type="checkbox" name="toppings">Pineapple </td>
</tr>
<tr>
<td><input type="checkbox" name="toppings">Peppers </td>
<td><input type="checkbox" name="toppings">Onions </td>
</tr>
<h2>Additional Instructions</h2>
<textarea wrap="virtual" name="additional" rows=2 cols=20 MAXLENGTH=100>
</textarea><br>
<input type="Submit" Value="submit">
</form>
</body>
</html>