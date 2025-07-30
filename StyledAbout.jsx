@media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    text-align: center;

    img {
        max-width: 100%;
        height: auto;
    }
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

& > div {
    animation: fadeIn 0.6s ease-in-out both;
}
