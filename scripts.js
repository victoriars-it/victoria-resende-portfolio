// Alterna para a aba de Educação quando clicada
document.getElementById("education-tab").addEventListener("click", function() {
    document.getElementById("education-content").classList.remove("hidden");  // Mostra o conteúdo de Educação
    document.getElementById("work-content").classList.add("hidden");          // Oculta o conteúdo de Experiência
    document.getElementById("languages-content").classList.add("hidden");     // Oculta o conteúdo de Idiomas
    this.classList.add("active");                                             // Marca a aba de Educação como ativa
    document.getElementById("work-tab").classList.remove("active");           // Desmarca a aba de Experiência
    document.getElementById("languages-tab").classList.remove("active");      // Desmarca a aba de Idiomas
});

// Alterna para a aba de Experiência quando clicada
document.getElementById("work-tab").addEventListener("click", function() {
    document.getElementById("work-content").classList.remove("hidden");       // Mostra o conteúdo de Experiência
    document.getElementById("education-content").classList.add("hidden");     // Oculta o conteúdo de Educação
    document.getElementById("languages-content").classList.add("hidden");     // Oculta o conteúdo de Idiomas
    this.classList.add("active");                                             // Marca a aba de Experiência como ativa
    document.getElementById("education-tab").classList.remove("active");      // Desmarca a aba de Educação
    document.getElementById("languages-tab").classList.remove("active");      // Desmarca a aba de Idiomas
});

// Alterna para a aba de Idiomas quando clicada
document.getElementById("languages-tab").addEventListener("click", function() {
    document.getElementById("languages-content").classList.remove("hidden");  // Mostra o conteúdo de Idiomas
    document.getElementById("education-content").classList.add("hidden");     // Oculta o conteúdo de Educação
    document.getElementById("work-content").classList.add("hidden");          // Oculta o conteúdo de Experiência
    this.classList.add("active");                                             // Marca a aba de Idiomas como ativa
    document.getElementById("education-tab").classList.remove("active");      // Desmarca a aba de Educação
    document.getElementById("work-tab").classList.remove("active");           // Desmarca a aba de Experiência
});
