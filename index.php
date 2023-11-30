<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./73.css">
    <script src="./main.js" defer></script>
</head>

<body>
    <div class="content-box">
        <div id="left">
            <div class="nav-info">
                <div class="img-avt">
                    <img src="./img/avt.png" class="img-info">
                </div>
                <div class="text-info">
                    <b>Đoàn Thị Ngọc Mai</b>
                    <div>AT150438</div>
                </div>
            </div>
            <div class="content-menu">
                <ul class="nav-menu" method="get">
                    <li class="active" data-page="7.3">7.3. Lấy dữ liệu và gửi dữ
                        liệu</li>
                    <li>7.4 Form tính toán</li>
                </ul>
                <?php
                if (!empty($_GET['page'])) {
                    switch ($_GET['page']) {
                        case "home":
                            include_once("./pages/home.php");
                            break;
                        case "contact":
                            include_once("./pages/contact.php");
                            break;
                        case "drawTable":
                            include_once("./pages/drawTable.php");
                            break;
                        case "loop":
                            include_once("./pages/loop.php");
                            break;
                    }
                } else {
                    echo "No page";
                }
                ?>
            </div>
        </div>
        <section id="right">
            <div class="banner-home">
                <img src="./img/banner1.png">
            </div>
            <div class="content-body">
                <div class="content-background">
                    <!-- <div id="nav-top">
                        <form id="form" action="" method="get">
                            <input id="input" hidden type="text" name="page">
                            <button data-page="home" type="button">Home</button>
                            <button data-page="contact" type="button">Contact</button>
                            <button data-page="drawTable" type="button">DrawTable</button>
                            <button data-page="loop" type="button">Loop</button>
                        </form>
                    </div> -->

                    <div class="content content-padding">
                        <div class="left">
                            <img src="./img/logo_KMA.jpg">
                            <img src="./img/b.gif">
                        </div>
                        <div class="right">
                            <div style="margin-bottom: 50px;">Moi page duoc chay tren nen trang Index.php</div>
                            <?php
                            if (!empty($_GET['page'])) {
                                switch ($_GET['page']) {
                                    case "home":
                                        include_once("./pages/home.php");
                                        break;
                                    case "contact":
                                        include_once("./pages/contact.php");
                                        break;
                                    case "drawTable":
                                        include_once("./pages/drawTable.php");
                                        break;
                                    case "loop":
                                        include_once("./pages/loop.php");
                                        break;
                                }
                            } else {
                                echo "No page";
                            }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class=" footer">
        <p>© 2023 Copyright: Ngọc Mai</p>
    </div>
</body>

</html>