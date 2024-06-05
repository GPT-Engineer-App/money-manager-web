<?php
include 'db.php';

if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM usuario WHERE email='$email' AND senha='$senha'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        session_start();
        $_SESSION['username'] = $row['nomeCompleto'];
        header("Location: main.html");
    } else {
        echo "Email ou senha incorretos.";
    }
}

if (isset($_POST['cadastro'])) {
    $nomeCompleto = $_POST['nomeCompleto'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $confirmarSenha = $_POST['confirmarSenha'];

    if ($senha == $confirmarSenha) {
        $sql = "INSERT INTO usuario (nomeCompleto, email, senha) VALUES ('$nomeCompleto', '$email', '$senha')";
        if ($conn->query($sql) === TRUE) {
            header("Location: index.html");
        } else {
            echo "Erro: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "As senhas não coincidem.";
    }
}

$conn->close();
?>