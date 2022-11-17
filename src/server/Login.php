

<?php

  $host = "localhost";
  $port = "5432";
  $dbname = "TopPC";
  $user = "postgres";
  $password = "postgres"; 

// configurar os acessos acima

  $connection_string = "host={$host} port={$port} dbname={$dbname} user={$user} password={$password} ";
  $dbconn = pg_connect($connection_string);


 
  if(isset($_POST['submit']) && !empty($_POST['submit'])){
      
      $hashpassword = md5($_POST['password']);
      $sql ="select * from users where username = '". pg_escape_string($_POST['username']) ."' and passhash ='". md5($_POST['password']) ."'";
      $data = pg_query($dbconn,$sql); 
      $login_check = pg_num_rows($data);
      if($login_check > 0){ 
          
          echo "Login Successfully";    
      }else{
          
          echo "Invalid Details";
      }
  }else{
    echo "pulei tudo";
  }

?>