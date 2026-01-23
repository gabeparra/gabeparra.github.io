<html>
<body>
<H1>Pizza Ordering Form</H1>
<form action="test">
<H2>Contact Information</H2>
Name: <input name=name required><br>
Phone: <input name=phone required><br>
Email: <input name=email required><br>
<H2>Select Pizza Size</H2>
Pizza Size: 
<select name="size" required>
<option value="" selected disabled>Select Size</option>
<option value="Medium">Medium</option>
<option value="Large">Large</option>
<option value="XLarge">XLarge</option>
</select><br>
<h2>Select Sauce</h2>
<input type="radio" name="sauce" required> Marinara
<input type="radio" name="sauce" required> Ranch
<input type="radio" name="sauce" required> No Sauce
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
</table>
<h2>Additional Instructions</h2>
<textarea wrap="virtual" name="additional" rows=2 cols=20 MAXLENGTH=100>
</textarea><br>
<input type="Submit" Value="submit">
</form>
List of my favorite games
<table border="1">
    <tr>
        <td>Developer</td>
        <td>Title</td>
        <td>Year</td>
    </tr>
    <tr>
        <td rowspan="2">CD Projekt Red</td>
        <td>The Witcher 3</td>
        <td>2015</td>
    </tr>
    <tr>
        <td>Cyberpunk 2077</td>
        <td>2020</td>
    </tr>
    <tr>
        <td>Rockstar Games</td>
        <td>Grand Theft Auto San Andreas</td>
        <td>2004</td>
    </tr>
    <tr>
        <td>NetEase Games</td>
        <td>Marvel Rivals</td>
        <td>2025</td>
    </tr>
    <tr>
        <td colspan="3">Count: 4</td>
    </tr>
</table>
</body>
</html>