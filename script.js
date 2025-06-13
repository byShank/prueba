document.addEventListener('DOMContentLoaded', function() {
    // Filtrado de cursos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            courseCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hide');
                } else {
                    const cardCategories = card.getAttribute('data-category').split(' ');
                    if (cardCategories.includes(filterValue)) {
                        card.classList.remove('hide');
                    } else {
                        card.classList.add('hide');
                    }
                }
            });
        });
    });
    
    // Efecto hover mejorado para las tarjetas
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const image = card.querySelector('.course-image img');
            image.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            const image = card.querySelector('.course-image img');
            image.style.transform = 'scale(1)';
        });
    });
    
    // Animación de carga suave
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Transición suave al cargar la página
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';