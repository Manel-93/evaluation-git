// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}


function reset() {
  tasks = [];
  nextId = 1;
}

// ... (Les fonctions addTask et toggleTask restent inchangées) ...

/**
 * Ajoute une nouvelle tâche à la liste.
 * @param {string} name - Le nom de la tâche.
 * @returns {object} La nouvelle tâche ajoutée.
 * @throws {Error} Si le nom est vide après le nettoyage.
 */
function addTask(name) {
  // 1. Nettoyer (trim) le nom de la tâche
  const trimmedName = String(name).trim();

  // Vérification si le nom est vide après le nettoyage
  if (trimmedName.length === 0) {
    throw new Error("Le nom de la tâche ne peut pas être vide.");
  }

  const newTask = {
    // 2. ID unique
    id: nextId++,
    // 3. Nom nettoyé
    name: trimmedName,
    // 4. Statut par défaut
    done: false,
  };

  tasks.push(newTask);
  return newTask;
}

/**
 * Bascule l'état 'done' (fait/non fait) d'une tâche.
 * @param {number} id - L'ID de la tâche à basculer.
 * @returns {object | null} La tâche modifiée, ou null si l'ID n'est pas trouvé.
 */
function toggleTask(id) {
    const taskId = Number(id);

    const task = tasks.find(t => t.id === taskId);

    if (task) {
        task.done = !task.done;
        return task;
    }
    return null;
}

/**
 * Compte le nombre de tâches marquées comme 'faites' (done: true).
 * @returns {number} Le nombre total de tâches complétées.
 */
function countDone() {
    // Utilise la méthode filter pour obtenir seulement les tâches faites,
    // puis retourne la longueur du tableau résultant.
    return tasks.filter(tache => tache.done === true).length;
}


module.exports = { getTasks, reset, addTask, toggleTask, countDone }; // N'oubliez pas l'export !