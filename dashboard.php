  <?php 
  $bodyClass = 'dashboard';
 include('templates/header.html');
?>

  <main>
  <div class="myPost">
    <div style='display: flex;'>
    <div class="pdp"></div>
    <h1>Nom Prénom</h1>
    </div>
    <textarea name="My message" placeholder='Que Faites-vous ?'></textarea>
  <button>Publier</button> 
  </div>

  <div class="post">
    <div style='display: flex; justify-content: space-between'>
      <div>
    <div style='display: flex;'>
    <div class="pdp"></div>
    <h2>Nom Prénom</h2>
    </div>
    <h3>Curling sur gazon</h3>
    </div>
    <p>9:30</p>
    </div>
<div style='display: flex; justify-content: space-between'>
<p class="endroit">Montreal, Curling court</p>
<p class="avec">Francis Duvalle</p>
</div>
    <div class="map"></div>
  </div>
 
 

  </main>

  <script src="js/dashboard.js"></script>
    <script src="js/main.js"></script>


</body>

</html>
