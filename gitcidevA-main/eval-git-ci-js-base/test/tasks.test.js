// Assurez-vous que l'import est mis à jour :
// const { getTasks, reset, addTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

// --- NOUVEAUX TESTS POUR addTask ---
describe('addTask', () => {

  test('should store task with correct properties (id, name, done:false)', () => {
    const task = addTask('Acheter du lait');
    
    // Vérifie l'objet retourné
    expect(task).toEqual({ id: 1, name: 'Acheter du lait', done: false });
    
    // Vérifie qu'il est bien dans la liste globale
    expect(getTasks()).toEqual([task]);
  });

  test('should ensure unique and sequential IDs for multiple tasks', () => {
    const task1 = addTask('Tâche A'); // ID 1
    const task2 = addTask('Tâche B'); // ID 2
    
    expect(task1.id).toBe(1);
    expect(task2.id).toBe(2);
    expect(getTasks().length).toBe(2);
  });

  test('should trim whitespace from the task name', () => {
    const task = addTask('   Apprendre Git   ');
    
    // Vérifie que les espaces de début et de fin sont supprimés
    expect(task.name).toBe('Apprendre Git');
  });

  // Cas limite/erreur pertinent (obligatoire pour l'évaluation)
  test('should throw an error if the name is empty or only whitespace after trim', () => {
    // Cas chaîne vide
    expect(() => addTask('')).toThrow('Le nom de la tâche ne peut pas être vide.');
    
    // Cas espaces uniquement
    expect(() => addTask('   \n\t ')).toThrow('Le nom de la tâche ne peut pas être vide.');
    
    // Vérifie qu'aucune tâche n'a été ajoutée
    expect(getTasks()).toEqual([]); 
  });
});