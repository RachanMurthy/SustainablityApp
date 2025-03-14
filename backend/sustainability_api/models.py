from django.db import models

class SustainableAction(models.Model):
    """
    This is the SustainableAction model structure:
    
    action: CharField with max_length=255
    date: DateField
    points: IntegerField
    """
    action = models.CharField(max_length=255)  
    date = models.DateField()  
    points = models.IntegerField()  

    def __str__(self):
        return f"{self.action} - {self.points} points"
