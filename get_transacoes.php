<?php
include 'db.php';

$sql = "SELECT * FROM transacao";
$result = $conn->query($sql);

$transacoes = array();
while ($row = $result->fetch_assoc()) {
    $transacoes[] = $row;
}

echo json_encode($transacoes);

$conn->close();
?>