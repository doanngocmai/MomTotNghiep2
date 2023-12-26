<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./Bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./index.css">

    <script src="./Bootstrap/js/bootstrap.js"></script>
    <script src="./index.js"></script>
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
                    <li class="active" data-page="7.3">7.3. Lấy dữ liệu và gửi dữ liệu
                    <li data-page="7.4">7.4</li>
                    <li data-page="7.5">7.5</li>
                    <li data-page="7.6">7.6</li>
                    <li data-page="7.7">7.7</li>
                    <li data-page="7.8">7.8</li>
                    <li data-page="7.9">7.9</li>
                    <li data-page="7.10">7.10</li>
                </ul>
            </div>
        </div>
        <section id="right">
            <div class="banner-home">
                <img src="./img/banner1.png">
            </div>
            <div class="content-body">
                <div class="content-background">
                    <?php
                    if (isset($_GET['page'])) {
                        $page = $_GET['page'];
                        $folderPath = "./pages/bai{$page}/";
                        $filename = $folderPath . "index.php";
                        if (file_exists($filename)) {
                            include $filename;
                        } else {
                            echo "Page not found!";
                        }
                    }
                    ?>
                </div>
            </div>
        </section>
    </div>
    <div class="footer">
        <?php
        include_once("./pages/footer.php");
        ?>
    </div>
</body>

</html>