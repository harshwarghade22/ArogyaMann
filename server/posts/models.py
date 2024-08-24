from django.db import models

# Create your models here.

class Post(models.Model):
    # author = models.ForeignKey('acccounts.UserAccount', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
    # def created_at(self):
    #     return self.created_at
    


    

