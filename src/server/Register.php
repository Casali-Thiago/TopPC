<?php

  $host = "localhost";
  $port = "5432";
  $dbname = "TopPC";
  $user = "postgres";
  $password = "postgres"; 

// configurar os acessos acima

  $connection_string = "host={$host} port={$port} dbname={$dbname} user={$user} password={$password} ";
  $dbconn = pg_connect($connection_string);


 
  if(isset($_POST['submit'])&&!empty($_POST['submit'])){
    
    $sql = "insert into public.users(
       username, passhash, email)values('".$_POST['username']."','".$_POST['email']."','".md5($_POST['passhash'])."')";
  $ret = pg_query($dbconn, $sql);
  if($ret){
      
          echo "Cadastro realizado";
  }else{
      
          echo "Deu ruim";
  }
}
  
?>