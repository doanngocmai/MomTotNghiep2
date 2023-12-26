<script src="./main.js" defer></script>
<div>
    <div id="nav-top">
        <form id="form" action="" method="get">
            <input id="input" hidden type="text" name="page">
            <button data-page="home" type="button">Home</button>
            <button data-page="contact" type="button">Contact</button>
            <button data-page="drawTable" type="button">DrawTable</button>
            <button data-page="loop" type="button">Loop</button>
        </form>
    </div>

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