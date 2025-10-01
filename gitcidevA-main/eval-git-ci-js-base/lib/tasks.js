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

module.exports = { getTasks, reset, addTask };