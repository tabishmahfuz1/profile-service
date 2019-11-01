#include <stdio.h>
#include <stdlib.h>
#include<iostream>

using namespace std;
struct node
{
     int data;
     struct node* left;
     struct node* right;
};

struct node* newnode(int data)
{
     struct node* node = (struct node*)malloc(sizeof(struct node));
     node->data = data;
     node->left = NULL;
     node->right = NULL;

     return(node);
}

void postorder(struct node* node)
{
     if (node == NULL)
        return;

     postorder(node->left);
     postorder(node->right);
     printf("%d ", node->data);
}

void inorder(struct node* node)
{
     if (node == NULL)
          return;

     inorder(node->left);
     printf("%d ", node->data);
     inorder(node->right);
}

void preorder(struct node* node)
{
     if (node == NULL)
          return;

     printf("%d ", node->data);
     preorder(node->left);
     preorder(node->right);
}

void insert(struct node **node, int data)
{
    if(!*node){
        *node = newnode(data);
    }
    else if(data <= (*node)->data){
		cout << "\nInserting to Left of " <<(*node)->data << endl;
        insert(&(*node)->left,data);
    }
    else if(data > (*node)->data){
		cout << "\nInserting to Right of " <<(*node)->data << endl;
        insert(&(*node)->right,data);
    }
    return;
}

int main()
{
	/* string s[3];
	
	getline(cin, s[0]);
	getline(cin, s[1]);
	getline(cin, s[2]);
	
	cout << s[0] << endl << s[1] << endl << s[2];
	
	return 0; */
	
     struct node *root = NULL;
     int n;
     char c = 'y';

     while(1){
         printf("Input number: ");
         scanf("%d",&n);
         insert(&root,n);

         printf("Do you want to try again? [y][n]: ");
         scanf("%s",&c);
         if(c=='n'){
             break;
         }
     }

     printf("\nPreorder: ");
     preorder(root);

     printf("\nInorder: ");
     inorder(root);

     printf("\nPostorder: ");
     postorder(root);

     return 0;
}