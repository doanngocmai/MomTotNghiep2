<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/Bai4/bai7.6/style.css">
    <script src="/Bai4/bai7.6/main.js" defer></script>
</head>

<body>
    <header>
        <nav>
            <form id="form" action="" method="get">
                <input id="input" hidden type="text" name="page">
                <button data-page="home" type="button">Home</button>
                <button data-page="register" type="button">Register</button>
                <button data-page="contact1Page" type="button">Contact1Page</button>
            </form>
        </nav>
    </header>
    <main>
        <div class="left">
            Left
        </div>
        <div class="right">
            <div style="margin-bottom: 50px;">Moi page duoc chay tren nen trang Index.php</div>
            <?php
        if(!empty($_GET['page'])) {
          switch($_GET['page']) {
            case "home":
              include_once("./pages/home.php");
              break;
            case "register":
              include_once("./pages/register.php");
              break;
            case "contact1Page":
              include_once("./pages/contact1Page.php");
              break;  
          }
        } else {
          echo "No page";
        }
      ?>
        </div>
    </main>
</body>

</html>