// Assurez-vous que l'import est mis à jour :
// const { getTasks, reset, addTask, toggleTask } = require('../lib/tasks'); 

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

// ... (Anciens tests pour addTask ici) ...

// --- NOUVEAUX TESTS POUR toggleTask ---
describe('toggleTask', () => {
  let task1, task2;

  beforeEach(() => {
    // Crée deux tâches pour les tests (ID 1 et ID 2)
    task1 = addTask('Tâche à compléter');
    task2 = addTask('Tâche déjà faite');
  });

  test('should toggle task state from false to true', () => {
    // L'état initial est `done: false`
    expect(task1.done).toBe(false);

    const toggledTask = toggleTask(task1.id);

    // Vérifie l'objet retourné
    expect(toggledTask.done).toBe(true); 
    
    // Vérifie que l'objet dans la liste globale a été mis à jour
    expect(getTasks().find(t => t.id === task1.id).done).toBe(true);
  });

  test('should toggle task state from true back to false', () => {
    // On met la tâche à 'true' (comme étape préliminaire)
    toggleTask(task2.id); 
    expect(task2.done).toBe(true);

    const toggledTask = toggleTask(task2.id); // Bascule une seconde fois

    // Vérifie l'objet retourné
    expect(toggledTask.done).toBe(false); 
    
    // Vérifie que l'objet dans la liste globale a été mis à jour
    expect(getTasks().find(t => t.id === task2.id).done).toBe(false);
  });
  
  // Cas limite/erreur pertinent (gestion de l'ID inconnu)
  test('should return null and not modify the list if the ID is not found', () => {
    const initialList = getTasks(); // Référence à la liste initiale
    
    // Essayer un ID qui n'existe pas (par exemple 999)
    const result = toggleTask(999);
    
    // Vérifie qu'il retourne null
    expect(result).toBeNull();
    
    // Vérifie que la liste des tâches n'a pas été modifiée
    expect(getTasks()).toEqual(initialList);
  });
});