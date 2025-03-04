<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once 'ini.php'; // Předpokládám, že tento soubor obsahuje připojení k databázi pomocí MySQLi

session_start();

// Generování tokenu
$token = bin2hex(random_bytes(16));

var_dump($token);

// Uložení tokenu do databáze (používáme MySQLi)
try {
    // Příprava SQL dotazu pro vložení tokenu
    $sql = "INSERT INTO tokens (token) VALUES (?)";
    $stmt = $conn->prepare($sql);
    
    if ($stmt) {
        // Navázání hodnoty tokenu
        $stmt->bind_param("s", $token);
        
        // Spuštění dotazu
        $stmt->execute();
        
        // Uzavření statementu
        $stmt->close();
    } else {
        throw new Exception("Chyba při přípravě dotazu: " . $conn->error);
    }
} catch (Exception $e) {
    // Pokud dojde k chybě při vykonávání dotazu
    echo 'Chyba při ukládání tokenu: ' . $e->getMessage();
}

// Uložení tokenu do session
$_SESSION['token'] = $token;
?>
