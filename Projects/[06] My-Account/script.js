class Action {
	constructor(type, description, amount) {
		this.type = type;
		this.description = description;
		this.amount = type === 'income' ? +amount : -amount;
		this.id = Math.floor(Math.random() * 1000);
	}
}

class ActionsManager {
	constructor() {
		this.balance = 0;
		this.actions = JSON.parse(localStorage.getItem('actions')) || [];
		this.actions.forEach((action) => this.renderAction(action));
		this.calcBalance();
	}

	saveActions() {
		localStorage.setItem('actions', JSON.stringify(this.actions));
	}

	addAction(action) {
		this.actions.push(action);
		this.renderAction(action);
		this.saveActions();
		this.calcBalance();
	}

	deleteAction(actionId) {
		this.actions = this.actions.filter((action) => action.id !== actionId);
		this.updateDOMAfterActionChange();
		this.saveActions();
	}

	updateAction(actionId) {
		const actionToUpdate = this.actions.find((action) => action.id === actionId);

		if (actionToUpdate) {
			const newAmount = prompt('Enter the new amount:', actionToUpdate.amount);

			if (newAmount !== null && !isNaN(newAmount)) {
				actionToUpdate.amount = actionToUpdate.type === 'income' ? Math.abs(parseFloat(newAmount)) : -Math.abs(parseFloat(newAmount));
				this.updateDOMAfterActionChange();
				this.saveActions();
			}
		}
	}

	calcBalance() {
		this.balance = this.actions.reduce((total, action) => total + action.amount, 0);
		const balanceElement = document.getElementById('balance');
		balanceElement.innerText = `Balance: ${this.balance}₪`;
		balanceElement.classList.remove('text-success', 'text-danger', 'text-info');
		balanceElement.classList.add(this.balance > 0 ? 'text-success' : this.balance < 0 ? 'text-danger' : 'text-info');
	}

	renderAction(action) {
		const actionRow = document.createElement('tr');
		actionRow.innerHTML = `
            <td>${action.description}</td>
            <td class="${action.amount >= 0 ? 'text-success' : 'text-danger'}">${action.amount}₪</td>
            <td><i class="fa-regular fa-pen-to-square" data-id="${action.id}"></i></td>
            <td><i class="fa-regular fa-trash-can text-danger" data-id="${action.id}"></i></td>
        `;

		actionRow.querySelector('.fa-pen-to-square').addEventListener('click', () => {
			this.updateAction(action.id);
		});

		actionRow.querySelector('.fa-trash-can').addEventListener('click', () => {
			this.deleteAction(action.id);
		});

		document.getElementById('actions').appendChild(actionRow);
	}

	updateDOMAfterActionChange() {
		const actionsContainer = document.getElementById('actions');
		actionsContainer.innerHTML = '';
		this.actions.forEach((action) => this.renderAction(action));
		this.calcBalance();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const manager = new ActionsManager();
	manager.calcBalance();
	document.querySelector('button').addEventListener('click', () => {
		let description = document.getElementById('description').value;
		let amount = document.getElementById('amount').value;
		let type = document.getElementById('type').value;

		if (type === 'none') {
			alert('Please choose the type of action (Income or Expense).');
			return;
		}

		if (!description.trim()) {
			alert('Please enter a description.');
			return;
		}

		if (!amount.trim() || isNaN(amount)) {
			alert('Please enter a valid amount.');
			return;
		}

		let action = new Action(type, description, amount);
		manager.addAction(action);

		document.getElementById('description').value = '';
		document.getElementById('amount').value = '';
		document.getElementById('type').selectedIndex = 0;
	});
});
