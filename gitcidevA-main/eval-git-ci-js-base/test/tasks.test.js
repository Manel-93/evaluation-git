// ... (Les fonctions beforeEach et les tests précédents restent ici) ...

// --- NOUVEAUX TESTS POUR countDone ---
describe('countDone', () => {
    
    test('should return 0 when the list is empty', () => {
        // Le `beforeEach` (avec reset) assure que la liste est vide.
        expect(countDone()).toBe(0);
    });

    test('should return 0 when tasks exist but none are done', () => {
        addTask('Tâche 1 non faite');
        addTask('Tâche 2 non faite');
        
        expect(countDone()).toBe(0);
    });
    
    test('should correctly count completed tasks (done: true)', () => {
        // Tâche 1: Non faite (ID 1)
        const task1 = addTask('Tâche 1');
        
        // Tâche 2: Faite (ID 2)
        const task2 = addTask('Tâche 2');
        toggleTask(task2.id); // Met à done: true
        
        // Tâche 3: Faite (ID 3)
        const task3 = addTask('Tâche 3');
        toggleTask(task3.id); // Met à done: true

        // Seules la Tâche 2 et la Tâche 3 sont faites
        expect(countDone()).toBe(2);
    });
    
    test('should update count correctly after a task is toggled back to undone', () => {
        // Tâche 1 (ID 1): Faite
        const task1 = addTask('Tâche A');
        toggleTask(task1.id); 
        
        // Tâche 2 (ID 2): Faite
        const task2 = addTask('Tâche B');
        toggleTask(task2.id); 
        
        // Le compte doit être 2
        expect(countDone()).toBe(2); 
        
        // On remet la Tâche B à non faite
        toggleTask(task2.id); 
        
        // Le compte doit maintenant être 1
        expect(countDone()).toBe(1); 
    });
});